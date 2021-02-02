import React from "react";
import { withRouter } from 'react-router-dom';

import { Card } from "antd";
import { allRestaurants } from '../../../../components/Home/data';

class Basic extends React.Component {
  constructor(props) {
    super(props)
  }

  getDetails = (restaurant) =>{
    this.props.history.push({pathname:`/restaurant/details/${restaurant.id}`, data: restaurant});
  }

  render(){
    return (
      allRestaurants.map((restaurant) => {
        return (
          <Card
            key={restaurant.id}
            title={restaurant.name}
            extra={<span className="gx-link" onClick={() => this.getDetails(restaurant)}>More</span>}>
            <p>{restaurant.location}</p>
            <img src={restaurant.imgUrl}
            />
          </Card>
        )
      })
    );
  }
  
};

export default withRouter(Basic);
