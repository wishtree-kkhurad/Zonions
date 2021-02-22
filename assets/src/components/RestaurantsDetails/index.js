import React, { Component } from 'react';
import moment from 'moment';
import { Layout,Form, Input, Button, Menu } from "antd";

const { Content, Footer, Header } = Layout;
import { footerText } from "../../util/config";
import Customizer from "../../containers/Customizer";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const cuisines = [
    {
        "cuisineId": 1,
        "cuisineName": 'Indian Combos',
        "backGroundImg": require('../../../images/indian-combos.jpg')
    },
    {
        "cuisineId": 2,
        "cuisineName": 'Desserts',
        "backGroundImg": require('../../../images/desserts.jpg')
    },
    {
        "cuisineId": 3,
        "cuisineName": 'Soups & Salads',
        "backGroundImg": require('../../../images/soups&salads.jpg')
    },
    {
        "cuisineId": 4,
        "cuisineName": 'Beverages',
        "backGroundImg": require('../../../images/Beverages.jpg')
    },
    {
        "cuisineId": 5,
        "cuisineName": 'Cakes',
        "backGroundImg": require('../../../images/Cakes.jpg')
    },
    {
        "cuisineId": 6,
        "cuisineName": 'Munchies',
        "backGroundImg": require('../../../images/munchies.jpg')
    },
    {
        "cuisineId": 7,
        "cuisineName": 'Chinese',
        "backGroundImg": require('../../../images/Chinese.jpg')
    },
    {
        "cuisineId": 8,
        "cuisineName": 'Italian',
        "backGroundImg": require('../../../images/Italian.jpg')
    },
    {
        "cuisineId": 9,
        "cuisineName": 'Fast Food',
        "backGroundImg": require('../../../images/fast-food.jpg')
    },

];

const menu = (
    <Menu>
        {
            cuisines.map((item) => {
                return (
                    <Menu.Item key={item.cuisineId}>
                        <a target="_blank" rel="noopener noreferrer" onClick={() => alert(`clicked on ${item.cuisineName}`)}>
                            {item.cuisineName}
                        </a>
                    </Menu.Item>)

            })
        }
    </Menu>
);

class RestaurantDetails extends Component {
    render() {
        console.log('in deatils page', this.props.location)

        return (
            <Layout className="gx-app-layout">
                <Content className={`gx-layout-content`}>
                    <div id='landingpage-div1'></div>

                    <div className='row' style={{ marginTop: '30px', marginBottom: '40px' }}>
                        <div className='col-md-6'>
                            <img alt={this.props.location.data.imageName}
                                src='../../../images/default_img.jpg' />
                        </div>
                        <div className='col-md-6' >
                            <div style={{marginBottom:'3px'}}>
                                <h1 style={{ fontSize: '3rem', overflow: 'hidden',textOverflow: 'ellipsis'}}>
                                    {this.props.location.data.restaurantName}
                                </h1>
                            </div>
                            <div>
                                <h2 style={{ 
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'}}>
                                        Location: {this.props.location.data.address}
                                </h2>
                                <h3>Opens at: {moment(this.props.location.data.openingTime).format('HH:mm')}</h3>
                                <h3>Closes at: {moment(this.props.location.data.closingTime).format('HH:mm')}</h3>
                            </div>
                            <div>
                                <button type='button'
                                    className='btn btn-primary'
                                    onClick={() => history.back()}>Go Back
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='footer-div'>
                        <h2>Become an Inside</h2>
                        <p>Gain access to exclusive offers, best-of lists and more(you can unsubscribe anytime).</p>

                        <Form name="horizontal_login" layout="inline" onSubmit={(e) => { this.onSubmit(e) }}>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email" style={{ width: 400 }} />
                            </Form.Item>

                            <Form.Item >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Form>
                        {footerText}
                    </div>
                </Content>
            </Layout>
        )
    }

}

export default RestaurantDetails;
