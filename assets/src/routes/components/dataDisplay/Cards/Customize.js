import React from "react";
import { Card, Layout } from "antd";
import { footerText } from "../../../../util/config";
import Auxiliary from "../../../../util/Auxiliary";

const { Meta } = Card;
const { Content, Footer, Header } = Layout;

const Customize = (props) => {
  console.log('props in customize', props)
  return (
    // <div>

    //   <Card hoverable>
    //     <button type='button' className='btn btn-primary' onClick={() => history.back()}>Go Back</button>

    //     <img alt={props.resto.imageName} src='../../../../../images/degault_img.png' />
    //     <h1>{props.resto.restaurantName}</h1>
    //     <h3>{props.resto.address}</h3>
    //     <h3>{props.resto.openingTime}</h3>
    //     <h3>{props.resto.closingTime}</h3>

    //     </Card>

    // </div>
  );
};
export default Customize;
