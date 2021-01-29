import React from "react";
import {Card} from "antd";

const {Meta} = Card;

const Customize = (props) => {
  console.log('props in customize', props)
  return (

    <Card 
      hoverable
      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
    >
      <h1>{props.resto.name}</h1>
      <img alt='hotel-img' src={props.resto.imgUrl} style={{width:'100%'}}/>
      <hr/>
      <Meta
        title={props.resto.location}
        description="www.instagram.com"
      />

      {/* <Meta
        title="Europe Street beat"
        description="www.instagram.com"
      /> */}
    </Card>

  );
};

export default Customize;
