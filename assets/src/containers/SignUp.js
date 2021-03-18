import React from "react";
import axios from 'axios';
import { Button, Checkbox, Form, Icon, Input , Select} from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
const { Option } = Select;
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "../appRedux/actions/Auth";

import validate from 'react-joi-validation';
import Joi from 'joi' // or whatever Joi library you are using

import IntlMessages from "../util/IntlMessages";
import { message } from "antd/lib/index";
import CircularProgress from "../components/CircularProgress/index";

const FormItem = Form.Item;

const schema = Joi.object().keys({
  userName: Joi.string().required(),
  email: Joi.string().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).required(),
  password: Joi.string().min(8).required(),
});

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      // email: 'demo@example.com',
      // password: 'demo#123'
      userName: '',
      email: '',
      password: '',
      role:'',
      userNameError:'',
      emailError:'',
      passwordError:''
    }
  }
  validate = () => {
    const result = Joi.validate(
      {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }
      , schema)
    return result;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const result = this.validate();

    if (result.error !== null) {
      const errorField = result.error.details[0].context.key;
      console.log('errorFiels', errorField);

      if (errorField === 'userName') {
        this.setState({
          userNameError: result.error.details[0].message
        })
      } else if (errorField === 'email') {
        this.setState({
          emailError: result.error.details[0].message
        })
      } else if (errorField === 'password') {
        this.setState({
          passwordError: result.error.details[0].message
        })
      }
    }
    else {
      console.log('Received values in sign up: ', this.state);
      axios.post('http://localhost:1337/api/user/register', this.state)
        .then((res) => {
          console.log('User sign up successfully', res)
          this.props.history.push({ pathname: '/restaurant/manage', from: 'SignUp' });
        })
        .catch((err) => {
          console.log('User sign up error', err);
        })
    }
  };

  changeHandler = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.form.setFieldsValue({
      [e.target.name]: this.state
    });
  }

  handleSelectChange = (value)=>{
    console.log(`selected ${value}`);
    this.setState({
      role: value
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content" style={{ backgroundColor: 'rgba(6, 12, 53, 0.829)' }}>
              {/* <div className="gx-app-logo-content-bg">
                <img src='../../images/signin_cover.jpg' alt='Neature' />
              </div> */}
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="Sign Up with Zonions" /></h1>
                <p><IntlMessages id="app.userAuth.bySigning" /></p>
                <p><IntlMessages id="app.userAuth.getAccount" /></p>
              </div>
            </div>

            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signup-form gx-form-row0">
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                    onChange: this.changeHandler
                  })(
                    <Input type='text' placeholder="Username" name='userName' />
                  )}
                  {
                    this.state.userNameError !== '' ? 
                    <span style={{color:'red'}}>{this.state.userNameError}</span>
                    :null
                  } 
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                    onChange: this.changeHandler
                  })(
                    <Input placeholder="Email" name="email" />
                  )}
                  {
                    this.state.emailError !== '' ? 
                    <span style={{color:'red'}}>{this.state.emailError}</span>
                    :null
                  }
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                    onChange: this.changeHandler
                  })(
                    <Input type="password" placeholder="Password" name='password' />
                  )}
                  {
                    this.state.passwordError !== '' ? 
                    <span style={{color:'red'}}>{this.state.passwordError}</span>
                    :null
                  }
                </FormItem>

                <Select placeholder="Sign up as" onChange={this.handleSelectChange}>
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                </Select>

                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox><IntlMessages id="appModule.iAccept" /></Checkbox>
                  )}
                  <span className="gx-link gx-signup-form-forgot"><IntlMessages
                    id="appModule.termAndCondition" /></span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signUp" />
                  </Button>
                  <span><IntlMessages id="app.userAuth.or" /></span> <Link to="/signin"><IntlMessages
                    id="app.userAuth.signIn" /></Link>
                </FormItem>
              </Form>
            </div>
            {loader &&
              <div className="gx-loader-view">
                <CircularProgress />
              </div>
            }
            {showMessage &&
              message.error(alertMessage)}
          </div>
        </div>
      </div>

    );
  }

}

const WrappedSignUpForm = Form.create()(withRouter(SignUp));
export default WrappedSignUpForm;

// const mapStateToProps = ({ auth }) => {
//   const { loader, alertMessage, showMessage, authUser } = auth;
//   return { loader, alertMessage, showMessage, authUser }
// };

// export default connect(mapStateToProps, {
//   userSignUp,
//   hideMessage,
//   showAuthLoader,
//   userFacebookSignIn,
//   userGoogleSignIn,
//   userGithubSignIn,
//   userTwitterSignIn
// })(WrappedSignUpForm);
