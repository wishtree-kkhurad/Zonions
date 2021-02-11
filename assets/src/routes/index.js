import React from "react";
import {Route, Switch} from "react-router-dom";

import EditRestaurant from '../components/EditRestaurant/index';
import AddRestaurant from '../components/AddRestaurant/index';
import ManageRestaurants from '../components/ManageRestaurant/index';

const RouteApp = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}restaurant/add`} component={AddRestaurant}/>
      <Route path={`${match.url}restaurant/manage`} component={ManageRestaurants}/>
      <Route path={`${match.url}restaurant/edit/:id`} component={EditRestaurant}/>

    </Switch>
  </div>
);

export default RouteApp;


