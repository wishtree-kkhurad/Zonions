import React from "react";
import {Button} from "antd";
import StarRatingComponent from "react-star-rating-component";
import {withRouter} from 'react-router-dom';
import IntlMessages from "../../util/IntlMessages";

// const ProductItem = ({product, grid, props}) => {
class ProductItem extends React.Component {
  constructor(props) {
    super(props)
  }
  
  // const {thumb, name, price, mrp, offer, variant, rating, description} = product;
  render(){
    const {restaurantName, address, imgUrl,id} = this.props.product;

    const getDetails = () => {
      console.log('from product item', this.props)
      this.props.history.push({pathname: `/restaurant/details/${id}`, data:this.props.product, from:'ProductItem'})
    }
    
  return (
    <div className={`gx-product-item  ${this.props.grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
      <div className="gx-product-image">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img alt="Menu" src={imgUrl}/>
          </span>
        </div>
      </div>

      <div className="gx-product-body">
        <h3 className="gx-product-title">{restaurantName}
          <small className="gx-text-grey">{", " + address}</small>
        </h3>
        
        {/* <div className="ant-row-flex gx-mb-1">
          <StarRatingComponent
            name=""
            value={rating}
            starCount={5}
            editing={false}/>
          <strong className="gx-d-inline-block gx-ml-2">{rating}</strong>
        </div>
        <p>{description}</p> */}
      </div>

      <div className="gx-product-footer">
        <Button type="primary" onClick={()=>getDetails(this.props.product)}><IntlMessages id="eCommerce.readMore"/></Button>
      </div>
    </div>
  )
  }
};

export default withRouter(ProductItem);

