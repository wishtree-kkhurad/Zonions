import React from 'react';
import axios from 'axios';
import ProductItem from '../../routes/customViews/eCommerce/ProductGrid/index';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { Layout, Button } from "antd";
import { footerText } from "../../util/config";
import Auxiliary from "../../util/Auxiliary";


const { Content, Footer, Header } = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    goToLogin = () => {
        this.props.history.push({ pathname: '/signin' });
    }
    goToSignup = () => {
        this.props.history.push({ pathname: '/signup' });
    }
    render() {

        return (
            <Layout className="gx-app-layout">
                <Content className={`gx-layout-content`}>
                   
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <h1 style={{ fontSize: '55px', textAlign: 'center' }}>Zonions</h1>
                        <div>
                            <Button type='primary' onClick={() => this.goToLogin()}>Login</Button>
                            <Button type='primary' onClick={() => this.goToSignup()}>SignUp</Button>
                        </div>
                    </Header>
                    <div>
                        <ProductItem />
                    </div>
                </Content>
                <Footer>
                    <div className="gx-layout-footer-content">
                        {footerText}
                    </div>
                </Footer>
            </Layout>
        );
    }
}
export default withRouter(Home);