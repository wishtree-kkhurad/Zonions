import React, { Component,Suspense  } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "../../lngProvider";
import MainApp from "./MainApp";
import RestaurantsDetails from '../../components/RestaurantsDetails/index';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { setInitUrl } from "../../appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType , switchLanguage} from "../../appRedux/actions/Setting";

import LandingPage from '../../components/LandingPage/index';
import LocationWiseRestaurants from '../../components/LocationWiseRestaurants/index';
import Page404 from '../../components/Page404'
import Cookie from 'js-cookie';
import UserLoginForm from '../../components/UserLogin/index'

import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";

const RestrictedRoute = ({ path, name, component: Component, ...rest }) => {
  let authUser = localStorage.getItem('user')
  return (
    <Route
      {...rest}
      render={props =>
        authUser !== null
          ? <Component {...props} />
          : <Redirect
            to={{
              pathname: '/landingpage',
              state: { from: props.location }
            }}
          />}
    />)
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   if (this.props.initURL === '') {
  //     this.props.setInitUrl(this.props.history.location.pathname);
  //   }
  //   const params = new URLSearchParams(this.props.location.search);

  //   if (params.has("theme")) {
  //     this.props.setThemeType(params.get('theme'));
  //   }
  //   if (params.has("nav-style")) {
  //     this.props.onNavStyleChange(params.get('nav-style'));
  //   }
  //   if (params.has("layout-type")) {
  //     this.props.onLayoutTypeChange(params.get('layout-type'));
  //   }
  // }

  render() {
    const { match, location, layoutType, navStyle,locale, initURL } = this.props;
    let authUser = JSON.parse(localStorage.getItem('user'))
   
    if (location.pathname === '/') {
      console.log('inside auth user checking', location.pathname);

      if (authUser === null) {
        console.log('auth user null', authUser)
        return (<Redirect to={'/landingpage'} />);
      } 
      else if (( initURL==='' || initURL==='/' || initURL === '/admin/signin') && (authUser.role==='admin')) {
        console.log('initURL in admin if', initURL)
        return ( <Redirect to={'/restaurant/manage'} /> );
      }
      else if (( initURL==='' || initURL==='/' || initURL === '/user/signin')&& (authUser.role==='user')) {
        return ( <Redirect to={'/restaurant/bookings'} /> );
      }
    }
  
    let localeFromLocalStorage = JSON.parse(localStorage.getItem('languagePreference'));

    let currentAppLocale=null;
    localeFromLocalStorage===null?
    
    currentAppLocale = AppLocale[locale.locale]
    :currentAppLocale = AppLocale[localeFromLocalStorage.locale];

    return (
      <LocaleProvider >
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >

          <Switch>
              <Route exact path='/landingpage' component={LandingPage} />
              <Route exact path='/restaurants/:location' component={LocationWiseRestaurants} />
              <Route exact path='/restaurant/details/:id' component={RestaurantsDetails}/>
              <Route exact path='/restaurant/details/name/:name' component={RestaurantsDetails}/>
            
              <Route exact path='/admin/signin' component={SignIn} />
              <Route exact path='/user/signin' component={UserLoginForm} />
              <Route exact path='/signup' component={SignUp} />
              <RestrictedRoute authUser={authUser}
                component={MainApp} />

              <Route component={Page404} />
          </Switch>
        </IntlProvider>
      </LocaleProvider>
    )
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { locale, navStyle, layoutType } = settings;
  // console.log('in index.js mapStateToProps locale = ',locale )
  const { authUser, initURL } = auth;
  return { locale, navStyle, layoutType, authUser, initURL }
};
export default connect(mapStateToProps, {setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, switchLanguage})(withRouter(App));