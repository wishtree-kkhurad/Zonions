import React from "react";
import axios from 'axios';
import { Button, Checkbox, Form, Icon, Input } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "../appRedux/actions/Auth";

import IntlMessages from "../util/IntlMessages";
import { message } from "antd/lib/index";
import CircularProgress from "../components/CircularProgress/index";

const FormItem = Form.Item;

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      // email: 'demo@example.com',
      // password: 'demo#123'
      userName: '',
      email: '',
      password: '',
      usersData: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      console.log("values", values);

      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignUp(values);

        // const { userName, email, password, usersData } = this.state
        // usersData.push({ userName: userName, email: email, password: password })
        // localStorage.setItem("users", JSON.stringify(usersData));
        // this.props.history.push('/restaurant/manage');
      }
    });

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

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/restaurant/manage');
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src='../../images/signin_cover.jpg' alt='Neature' />
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signUp" /></h1>
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
                </FormItem>

                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                    onChange:this.changeHandler
                  })(
                    <Input placeholder="Email" name="email" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                    onChange:this.changeHandler
                  })(
                    <Input type="password" placeholder="Password" name='password' />
                  )}
                </FormItem>
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
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
                      <Icon type="google" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGoogleSignIn();
                      }} />
                    </li>
                    <li>
                      <Icon type="facebook" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userFacebookSignIn();
                      }} />
                    </li>
                    <li>
                      <Icon type="github" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGithubSignIn();
                      }} />
                    </li>
                    <li>
                      <Icon type="twitter" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userTwitterSignIn();
                      }} />
                    </li>
                  </ul>
                </div>
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

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
  userSignUp,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedSignUpForm);
