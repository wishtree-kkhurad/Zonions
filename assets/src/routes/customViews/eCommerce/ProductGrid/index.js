import React from "react";
import axios from 'axios';
import {Col, Row} from "antd";
import ProductItem from "../../../../components/eCommerce/ProductItem";
import productData from "../../../../routes/customViews/eCommerce/productData";
// import {allRestaurants} from '../../../../components/Home/data';

class ProductsGrid extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       allRestaurants:[]
    }
  }
  async componentDidMount(){
    const data = await axios.get('http://localhost:1337/restaurants');

    console.log('data in home from api', data);
    this.setState({
      allRestaurants:data.data.response
    });
  }
  
  render(){
    return (
      <Row>
        {this.state.allRestaurants.map((restaurant, index) => (
          <Col key={index} xl={6} md={8} sm={12} xs={24}>
            <ProductItem key={index} grid product={restaurant}/>
          </Col>
        ))}
      </Row>
    );
  }
  
}

export default ProductsGrid;
