import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Table from '../../routes/components/table/Basic/Selection';


class ManageRestaurants extends React.Component {
    render() {
      return(
      <Table /> 
    )
}
}
export default ManageRestaurants;