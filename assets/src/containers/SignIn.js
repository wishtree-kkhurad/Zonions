import React from "react";
import { Button, Checkbox, Form, Icon, Input, message } from "antd";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

import { NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "../appRedux/actions/Auth";
import IntlMessages from "../util/IntlMessages";
import CircularProgress from "../components/CircularProgress/index";

import validate from 'react-joi-validation';
import Joi from 'joi' // or whatever Joi library you are using

const FormItem = Form.Item;

const schema = Joi.object().keys({
  email: Joi.string().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).required(),
  password: Joi.string().min(8).required(),
});

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }
  }

  validate = () => {
    const result = Joi.validate(
      {
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
      console.log('errorFields', errorField);

      if (errorField === 'email') {
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
      console.log('Received values in Sign in: ', this.state);

      axios.post('http://localhost:1337/api/user/login', this.state)
        .then((res) => {
          let authToken = res.data.token;

          localStorage.setItem('user', JSON.stringify({'email':this.state.email, 'authToken': authToken}))
          // Adds the token to the header
          axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
          // NotificationManager.success('Logged in successfully.', 'Success!', 30000);
          this.props.history.push({ pathname: '/restaurant/manage', from: 'SignIn' });
        })
        .catch((err) => {
          console.log('User sign in error', err);
          alert('Incorrect user credentials')
          // NotificationManager.error('Password did not match', 'Fail!', 30000);
        })

    }
  };

  // componentDidUpdate() {
  //   if (this.props.showMessage) {
  //     setTimeout(() => {
  //       this.props.hideMessage();
  //     }, 100);
  //   }
  //   if (this.props.authUser !== null) {
  //     this.props.history.push('/');
  //   }
  // }

  changeHandler = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.form.setFieldsValue({
      [e.target.name]: this.state
    });
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
                <img src="../../images/signin_cover.jpg" alt='Neature' />
              </div> */}
            
              <div className="gx-app-logo-wid" >
                <h1>
                  {/* <IntlMessages id="Sign in to Zonions" /> */}
                  <FormattedMessage id="Sign in to Zonions"
                    defaultMessage="Sign in to Zonions"
                    description="Sign in to Zonions"/>
                </h1>
                <p>
                  {/* <IntlMessages id="By Signing Up, you can avail full features of our services." /> */}
                  <FormattedMessage id="By Signing Up, you can avail full features of our services."
                    defaultMessage="By Signing Up, you can avail full features of our services."
                    description="By Signing Up, you can avail full features of our services."/>
                </p>
                <p>
                  {/* <IntlMessages id="Get an account !!!" /> */}
                  <FormattedMessage id="Get an account !!!"
                    defaultMessage="Get an account !!!"
                    description="Get an account !!!"/>
                </p>
              </div>

            </div>
            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signin-form gx-form-row0">

                <FormItem>
                  {getFieldDecorator('email', {
                    //initialValue: "demo@example.com",
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }], onChange: this.changeHandler
                  })(
                    <Input type='email' name='email' placeholder="Email" />
                  )}
                  {
                    this.state.emailError !== '' ?
                      <span style={{ color: 'red' }}>{this.state.emailError}</span>
                      : null
                  }
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    //initialValue: "demo#123",
                    rules: [{ required: true, message: 'Please input your Password!' }],
                    onChange: this.changeHandler
                  })(
                    <Input type="password" name='password' placeholder="Password" />
                  )}
                  {
                    this.state.passwordError !== '' ?
                      <span style={{ color: 'red' }}>{this.state.passwordError}</span>
                      : null
                  }
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>
                      {/* <IntlMessages id="by signing up, I accept" /> */}
                      <FormattedMessage id="by signing up, I accept"
                        defaultMessage="by signing up, I accept"
                        description="by signing up, I accept"/>
                    </Checkbox>
                  )}
                  <span className="gx-signup-form-forgot gx-link">
                    {/* <IntlMessages id="Terms & Conditions" /> */}
                    <FormattedMessage id="Terms & Conditions"
                        defaultMessage="Terms & Conditions"
                        description="Terms & Conditions"/>
                    </span>
                </FormItem> 
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    {/* <IntlMessages id="Sign in" /> */}
                    <FormattedMessage id="Sign in"
                        defaultMessage="Sign in"
                        description="Sign in"/>
                  </Button>
                  <span>
                    {/* <IntlMessages id="or" /> */}
                    <FormattedMessage id="or"
                        defaultMessage="or"
                        description="or"/>
                  </span> <Link to="/signup">
                    {/* <IntlMessages id="Sign up" /> */}
                    <FormattedMessage id="Sign up"
                        defaultMessage="Sign up"
                        description="Sign up"/>
                    </Link>
                </FormItem>
              </Form>
            </div>

            {loader ?
              <div className="gx-loader-view">
                <CircularProgress />
              </div> : null}
            {showMessage ?
              message.error(alertMessage.toString()) : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(withRouter(SignIn));
export default WrappedNormalLoginForm;

// const mapStateToProps = ({ auth }) => {
//   const { loader, alertMessage, showMessage, authUser } = auth;
//   return { loader, alertMessage, showMessage, authUser }
// };

// export default connect(mapStateToProps, {
//   userSignIn,
//   hideMessage,
//   showAuthLoader,
//   userFacebookSignIn,
//   userGoogleSignIn,
//   userGithubSignIn,
//   userTwitterSignIn
// })(WrappedNormalLoginForm);
