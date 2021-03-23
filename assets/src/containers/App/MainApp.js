import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import { Layout, Icon, Input} from "antd";
import {HomeFilled} from '@ant-design/icons';
import ButtonGroup from 'antd/lib/button/button-group';
const { Search } = Input;

import Sidebar from "../Sidebar/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
import HorizontalDark from "../Topbar/HorizontalDark/index";
import InsideHeader from "../Topbar/InsideHeader/index";
import AboveHeader from "../Topbar/AboveHeader/index";
import BelowHeader from "../Topbar/BelowHeader/index";

import Topbar from "../Topbar/index";
import { footerText } from "../../util/config";
import RouteApp from "../../routes/index";
import Customizer from "../../containers/Customizer";
import { connect } from "react-redux";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";


const { Content, Footer, Header } = Layout;

export class MainApp extends Component {

  getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };
  getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return <HorizontalDefault />;
      case NAV_STYLE_DARK_HORIZONTAL:
        return <HorizontalDark />;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return <InsideHeader />;
      case NAV_STYLE_ABOVE_HEADER:
        return <AboveHeader />;
      case NAV_STYLE_BELOW_HEADER:
        return <BelowHeader />;
      case NAV_STYLE_FIXED:
        return <Topbar />;
      case NAV_STYLE_DRAWER:
        return <Topbar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Topbar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <NoHeaderNotification />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <NoHeaderNotification />;
      default:
        return null;
    }
  };

  getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar />;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED:
        return <Sidebar />;
      case NAV_STYLE_DRAWER:
        return <Sidebar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar />;
      default:
        return null;
    }
  };
  constructor(props) {
    super(props)
  
    this.state = {
       authUser:{}
    }
  }
  
  componentDidMount(){
    const authUser = JSON.parse(localStorage.getItem('user'));
    this.setState({
      authUser
    })
  }
  render() {
    const { match, width, navStyle } = this.props;
    console.log('props in main app', this.props)

    const goToHome = () => {
      this.props.history.push({ pathname: '/landingPage' });
    }
    const userSignOut = () => {
      localStorage.removeItem('user');
      this.props.history.push({ pathname: '/landingpage' });
    }
    
    
    return (
      <Layout className="gx-app-layout">
        {/* {this.getSidebar(navStyle, width)} */}
        <Layout>
          {/* {this.getNavStyles(navStyle)} */}
          <Header style={{ backgroundColor: 'rgba(6, 12, 53, 0.829)' }}>
            <div>
              <HomeFilled style={{ fontSize: '25px', color: 'white' }} onClick={goToHome}/>
            </div>
            <div>
              <Icon type="logout"
                style={{ fontSize: '25px', color: 'white' }}
                onClick={userSignOut} />
            </div>
          </Header>

          <Content className={`gx-layout-content `}>
            <RouteApp match={match} authUser={this.state.authUser}/>
            <Footer style={{ backgroundColor: 'rgba(6, 12, 53, 0.829)', color: 'white' }}>
              <div className="gx-layout-footer-content">
                {footerText}
              </div>
            </Footer>
          </Content>
        </Layout>
        <Customizer />
      </Layout>
    )
  }
}

const mapStateToProps = ({ settings }) => {
  const { width, navStyle } = settings;
  return { width, navStyle }
};
export default connect(mapStateToProps)(MainApp);

