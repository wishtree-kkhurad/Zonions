import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Classic from '../../routes/customViews/extras/testimonials/Classic/index';
import { Layout, Row, Divider, Form, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

const { Content, Footer, Header } = Layout;
import { footerText } from "../../util/config";
import ButtonGroup from 'antd/lib/button/button-group';
const { Search } = Input;

const style = { background: '#0092ff', padding: '8px 0' };

const appFeatures = [
    {
        "id": "feature1",
        "title": "Find Favourites and Discover New Ones",
        "description": "Browse thousands of restaurants and stores to get the best of your neighborhood delivered.",
        "logo": require('../../../images/favourite_food.png')
    },
    {
        "id": "feature2",
        "title": "Free, Fast, and Essential",
        "description": "It's free to order, so save time tackling your to-do list at home, at work, or on the go.",
        "logo": require('../../../images/free-easy-fast.png')
    },
    {
        "id": "feature3",
        "title": "Place Your Order",
        "description": "Enter your address, find what you're looking for, and easily order from the best restaurants in the neighborhood.",
        "logo": require('../../../images/place_order_feature.png')
    },
    {
        "id": "feature4",
        "title": "We handle the rest",
        "description": "We work with the merchant to make sure everything is ready for delivery or pickup, Then we'll send you a confirmation.",
        "logo": require('../../../images/we_handle_feature.png')
    }
];

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

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class LandingPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            filteresRestaurants: []
        }
    }

    onSubmit = (e, values) => {
        e.preventDefault();
        console.log('Success:', values);
    };

    goToLogin = () => {
        this.props.history.push({ pathname: '/signin' });
    }
    
    goToSignup = () => {
        this.props.history.push({ pathname: '/signup' });
    }

    onSearch = async (value) => {
        this.props.history.push({ pathname: `/restaurants/${value}`})
    }

    render() {
        return (
            <Layout className="gx-app-layout">
                <Content className={`gx-layout-content`}>
                    <div id='landingpage-div1'>
                        <div className='customHeader-container'>
                            <div className='header-left'>
                                <ul className='headerList'>
                                    <li>
                                        <Button ghost style={{ border: '0' }} onClick={() => this.goToLogin()}>Log in</Button>
                                    </li>
                                    <li>
                                        <Button ghost style={{ border: '0' }} onClick={() => this.goToSignup()}>Sign up</Button>
                                    </li>
                                    <li>
                                        <Button ghost style={{ border: '0' }}>
                                            <Dropdown overlay={menu}>
                                                <a className="ant-dropdown-link"
                                                    onClick={e => e.preventDefault()}>
                                                    Cuisines<span><DownOutlined /></span>
                                                </a>
                                            </Dropdown>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button ghost style={{ border: '0' }}>Contact Us</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='appTitleDiv'>
                            <h1>Zonions</h1>

                            <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '45px' }}>See who delivers in your neighborhood</h3>
                            <ButtonGroup direction="vertical">
                                <Search placeholder="Input City"
                                    onSearch={this.onSearch}
                                    enterButton
                                    style={{ width: 400 }} />
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: '30px' }}>
                        <div className='container'>
                            <div className='col-md-12'>
                                <Divider className='col-md-12' style={{ fontSize: '25px', marginBottom: '3%' }} orientation="center">Cuisines</Divider>
                                {
                                    cuisines.map((item) => {
                                        return (
                                            <div key={item.cuisineId} className='cuisine-card'>
                                                <a href='#' >
                                                    <div className='card_img'>
                                                        <img src={item.backGroundImg} alt='Cuisine Image' />
                                                    </div>
                                                    <div className='card_text'>
                                                        {item.cuisineName}
                                                    </div>
                                                </a>
                                            </div>

                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <div className='container'>
                            <Divider style={{ fontSize: '20px', marginBottom: '3%' }} orientation="center">Why order with Zonions</Divider>
                            <div style={{ paddingBottom: '50px' }} >
                                <Row>
                                    <Classic features={appFeatures} />
                                </Row>
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
export default withRouter(LandingPage)