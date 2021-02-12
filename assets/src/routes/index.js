import React from "react";
import {Route, Switch} from "react-router-dom";

import EditRestaurant from '../components/EditRestaurant/index';
import AddRestaurant from '../components/AddRestaurant/index';
import ManageRestaurants from '../components/ManageRestaurant/index';
import '../../../node_modules/react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
const RouteApp = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}restaurant/add`} component={AddRestaurant}/>
      <Route path={`${match.url}restaurant/manage`} component={ManageRestaurants}/>
      <Route path={`${match.url}restaurant/edit/:id`} component={EditRestaurant}/>

    </Switch>
    <NotificationContainer />

  </div>
);

export default RouteApp;


