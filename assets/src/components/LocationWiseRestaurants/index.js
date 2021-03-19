import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { Layout, Row, Divider, Form, Input, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

const { Content, Footer, Header } = Layout;
import { footerText } from "../../util/config";
import ButtonGroup from 'antd/lib/button/button-group';
const { Search } = Input;

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

class LocationWiseRestaurants extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            filteredRestaurants: [],
            search:''
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

    onSearch = (value) =>{
        this.setState({
            search:value
        })
        console.log('keyword',this.state.search)
    }

    async componentDidMount() {
        let data = await axios.get(`http://localhost:1337/restaurants/location/${this.props.match.params.location}`);
        
        this.setState({
            filteredRestaurants: data.data.response
        })
    }

    getDetails = (restaurant) => {
        this.props.history.push({ pathname: `/restaurant/details/${restaurant.id}`, data: restaurant, from: 'LocationWiseRestaurants' })
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
                                <Search placeholder="Input restaurant name"
                                    onSearch={this.onSearch}
                                    enterButton
                                    style={{ width: 400 }} />
                            </ButtonGroup>
                        </div>
                    </div>

                    <div className='row' style={{ marginTop: '30px', marginBottom: '40px' }}>
                        {
                            (this.state.filteredRestaurants.length) > 0 ?
                                <div className='col-md-12'>

                                    <Divider className='col-md-12'
                                        style={{ fontSize: '25px', marginBottom: '3%' }}
                                        orientation="center">Discover the best restaurants in {this.props.match.params.location}
                                    </Divider>
                                    {
                                        this.state.filteredRestaurants.map((restaurant) => {
                                            return (
                                                <div key={restaurant.id} className='cuisine-card'>
                                                    <a onClick={() => this.getDetails(restaurant)}>
                                                        <div className='card_img'>
                                                            <img src={restaurant.imageData} alt={restaurant.imageName} />
                                                        </div>
                                                        <div className='card_text'
                                                            style={{
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            }}>
                                                            {restaurant.restaurantName}
                                                        </div>
                                                    </a>
                                                </div>

                                            );
                                        })
                                    }
                                </div> :
                                <>
                                    <Divider className='col-md-12'
                                        style={{ fontSize: '25px', marginBottom: '3%' }}
                                        orientation="center">
                                        Oops! No Restaurant Serving in {this.props.match.params.location}

                                    </Divider>
                                    <div className='col-md-12' style={{ marginLeft: '40%' }}>
                                        <Button type='primary' ghost onClick={() => history.back()}>Back To Home</Button>
                                    </div>
                                </>
                        }
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
export default withRouter(LocationWiseRestaurants)