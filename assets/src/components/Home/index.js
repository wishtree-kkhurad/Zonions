import React from 'react';
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
            <Layout className="gx-app-layout" style={{ margin: '2%' }}>
                <Content className={`gx-layout-content`}>
                    <Auxiliary>
                        <Header>
                            <h1 style={{ fontSize: '55px', textAlign: 'center' }}>Zonions</h1>
                            <div>
                                <Button type='primary'  onClick={() => this.goToLogin()}>Login</Button>
                                <Button type='primary' onClick={() => this.goToSignup()}>SignUp</Button>
                            </div>
                            
                        </Header>
                    </Auxiliary>

                    <div>
                        <ProductItem />
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
    }
}
export default withRouter(Home);