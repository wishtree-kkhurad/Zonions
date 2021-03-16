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
              pathname: '/signin',
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
    let authUser = localStorage.getItem('user')
    
    if (location.pathname === '/') {

      if (authUser === null) {
        return (<Redirect to={'/landingpage'} />);
      } else if ((initURL === '' || initURL === '/' || initURL === '/signin')) {
        return ( <Redirect to={'/restaurant/manage'} /> );
      }
      else {
        // return (<Redirect to={initURL} />);
        return ( <Redirect to={'/restaurant/manage'} /> );
      }
    }
    
    console.log('locale from props', locale)
    const currentAppLocale = AppLocale[locale.locale];
  
    console.log('currentAppLocale',currentAppLocale)
    console.log('current locale', currentAppLocale.locale)
    console.log('browser language', navigator.language)
    console.log('currentAppLocale.antd', currentAppLocale.antd)

    
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
              {/* {
                localStorage.getItem('user')=== null ? 
                <Route exact path='/signin' component={SignIn} />
                :  <Redirect to={'/restaurant/manage'} />
                
                // <Route path={`${match.url}restaurant/manage`} component={ManageRestaurants}/>
              } */}
              
              {/* <Route exact path='/signin' component={SignIn} /> */}
              <Route exact path='/signin' component={UserLoginForm} />
              <Route exact path='/signup' component={SignUp} />
            
              <RestrictedRoute authUser={authUser}
                component={MainApp} />
          </Switch>
        </IntlProvider>
      </LocaleProvider>
    )
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { locale, navStyle, layoutType } = settings;
  const { authUser, initURL } = auth;
  return { locale, navStyle, layoutType, authUser, initURL }
};
export default connect(mapStateToProps, {setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange, switchLanguage})(withRouter(App));