import React, { Component } from 'react';
// import Basic from '../../routes/components/dataDisplay/Cards/Basic';
import { Card } from "antd";
import { Col, Row } from "antd";

import { allRestaurants } from './data';


class Home extends Component {
    render() {
        return (
            <div className="gx-main-content">
                <Row>
                    {
                        allRestaurants.map((restaurant) => {
                            return (
                                <Col xl={8} lg={12} md={12} sm={24} xs={24} >
                                    <Card
                                        key={restaurant.id}
                                        title={restaurant.restaurantName}
                                        extra={<span className="gx-link" onClick={() => console.log('clicked on more link')}>More</span>}>
                                        <p>{restaurant.location}</p>
                                        <img src={restaurant.imgSrc} />
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        );
    }
}
export default Home;