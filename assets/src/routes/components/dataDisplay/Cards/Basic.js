import React from "react";
import { withRouter } from 'react-router-dom';

import { Card } from "antd";
import { allRestaurants } from '../../../../components/Home/data';

class Basic extends React.Component {
  constructor(props) {
    super(props)
  }

  getDetails = (restaurant) =>{
    this.props.history.push({pathname:`/restaurant/details/${restaurant.id}`, data: restaurant, from:'Basic'});
  }

  render(){
    return (
      
        <div className='row'>
          {
            allRestaurants.map((restaurant) => {
              
              return (
              <div className='col-md-3'>
                <Card
                  key={restaurant.id}
                  title={restaurant.name}
                  extra={<span className="gx-link" onClick={() => this.getDetails(restaurant)}>More</span>}>
                  <p>{restaurant.location}</p>
                  <img src={restaurant.imgUrl}
                  />
                </Card>
              </div>
                
              )
            })
          }
        </div>
    );
  }
  
};

export default withRouter(Basic);
