import React from "react";
import { Card, Layout } from "antd";
import { footerText } from "../../../../util/config";
import Auxiliary from "../../../../util/Auxiliary";

const { Meta } = Card;
const { Content, Footer, Header } = Layout;

const Customize = (props) => {
  console.log('props in customize', props)
  return (

    <Layout className="gx-app-layout">
      <Content className={`gx-layout-content`}>
        <Auxiliary>
          <Header>
            <h1 style={{ fontSize: '3rem', marginLeft: '42%' }}>Zonions</h1>
            <button type='button' className='btn btn-primary' onClick={() => history.back()}>Go Back</button>

          </Header>
        </Auxiliary>
        <div>
          <Card
            hoverable
          // cover={<img alt="example" src={props.resto.imgUrl}/>}
          >
            <h1>{props.resto.name}</h1>
            <img alt='hotel-img' src={props.resto.imgUrl} />
            <hr /><hr /><hr />
            <Meta
              title={props.resto.location}
              description="www.instagram.com"
            />
            <hr />
          </Card>
        </div>
        <div>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </div>

      </Content>
    </Layout>


  );
};
export default Customize;
