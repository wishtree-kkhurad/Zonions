import React, { Component } from "react";
import { connect } from "react-redux";
import URLSearchParams from 'url-search-params'
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";

import AppLocale from "../../lngProvider";
import MainApp from "./MainApp";
import RestaurantsDetails from '../../components/RestaurantsDetails/index'
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { setInitUrl } from "../../appRedux/actions/Auth";
import { onLayoutTypeChange, onNavStyleChange, setThemeType } from "../../appRedux/actions/Setting";
import LandingPage from '../../components/LandingPage/index';
import LocationWiseRestaurants from '../../components/LocationWiseRestaurants/index';


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

const RestrictedRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authUser
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

  componentWillMount() {
    if (this.props.initURL === '') {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
    const params = new URLSearchParams(this.props.location.search);

    if (params.has("theme")) {
      this.props.setThemeType(params.get('theme'));
    }
    if (params.has("nav-style")) {
      this.props.onNavStyleChange(params.get('nav-style'));
    }
    if (params.has("layout-type")) {
      this.props.onLayoutTypeChange(params.get('layout-type'));
    }
  }

  render() {
    const { match, location, layoutType, navStyle, locale, authUser, initURL } = this.props;

    if (location.pathname === '/') {
      if (authUser === null) {
        return (<Redirect to={'/landingpage'} />);

      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        return ( <Redirect to={'/restaurant/manage'} /> );
      }
      else {
        // return (<Redirect to={initURL} />);
        return ( <Redirect to={'/restaurant/manage'} /> );
      }
    }
    const currentAppLocale = AppLocale[locale.locale];
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}>

          <Switch>
            <Route exact path='/landingpage' component={LandingPage} />
            <Route exact path='/restaurants/:location' component={LocationWiseRestaurants} />
            <Route exact path='/restaurant/details/:id' component={RestaurantsDetails}/>
            <Route exact path='/restaurant/details/name/:name' component={RestaurantsDetails}/>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />

            <RestrictedRoute path={`${match.url}`} authUser={authUser}
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
export default connect(mapStateToProps, { setInitUrl, setThemeType, onNavStyleChange, onLayoutTypeChange })(withRouter(App));