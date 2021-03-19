import React from "react";
import {Route, Switch} from "react-router-dom";

import EditRestaurant from '../components/EditRestaurant/index';
import AddRestaurant from '../components/AddRestaurant/index';
import ManageRestaurants from '../components/ManageRestaurant/index';
import UserAfterLogin from '../components/UserAfterLogin/index';
import Page404 from '../components/Page404';
import '../../../node_modules/react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

const RouteApp = ({match}) => (
  <div className="gx-main-content-wrapper">
    {console.log('match.url', match.url)}
    <Switch>
      <Route exact path={`${match.url}restaurant/add`} component={AddRestaurant}/>
      <Route exact path={`${match.url}restaurant/manage`} component={ManageRestaurants}/>
      <Route exact path={`${match.url}restaurant/edit/:id`} component={EditRestaurant}/>
      <Route exact path={`${match.url}restaurant/bookings`} component={UserAfterLogin}/>
      <Route component={Page404} />
    </Switch>
    <NotificationContainer />
  </div>
);

export default RouteApp;


