// import React from "react";
// import {Button} from "antd";
// import {withRouter} from 'react-router-dom';
// import IntlMessages from "../../util/IntlMessages";

// // const ProductItem = ({product, grid, props}) => {
// class ProductItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }
  
//   render(){
//     const {restaurantName, address, imageData,imageName,id} = this.props.product;
    
//     const getDetails = () => {
//       this.props.history.push({pathname: `/restaurant/details/${id}`, data:this.props.product, from:'ProductItem'})
//     }
    
//   return (
//     <div className={`gx-product-item  ${this.props.grid ? 'gx-product-vertical' : 'gx-product-horizontal'}`}>
//       <div className="gx-product-image">
//         <div className="gx-grid-thumb-equal">
//           <span className="gx-link gx-grid-thumb-cover">
//             <img alt={imageName} src='../../../images/default_img.jpg'/>
//           </span>
//         </div>
//       </div>

//       <div className="gx-product-body">
//         <h3 className="gx-product-title">{restaurantName}
//           <small className="gx-text-grey">{", " + address}</small>
//         </h3>
//       </div>

//       <div className="gx-product-footer">
//         <Button type="primary" onClick={()=>getDetails()}><IntlMessages id="eCommerce.readMore"/></Button>
//       </div>
//     </div>
//   )
//   }
// };

// export default withRouter(ProductItem);

