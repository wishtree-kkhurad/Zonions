import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import { Layout, Icon, Input, Button , Breadcrumb} from "antd";
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
  
  render() {
    const { match, width, navStyle } = this.props;

    // const goToHome = () => {
    //   this.props.history.push({ pathname: '/home' });
    // }
    // const goToManage = () => {
    //   this.props.history.push({ pathname: '/restaurant/manage' });
    // }
    const userSignOut = () => {
      localStorage.removeItem('user');
      this.props.history.push({ pathname: '/landingpage' });
    }
    const breadcrumbNameMap = {
      '/restaurant/add': 'Add Restaurant',
      '/restaurant/manage': 'Manage Restaurants',
      '/restaurant/edit/:id': 'Edit Restaurant'
    };
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      console.log('ULR = ', url)
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url} style={{color: 'white' }}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });

    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/landingPage" style={{color: 'white' }}>Home</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
      <Layout className="gx-app-layout">
        {/* {this.getSidebar(navStyle, width)} */}
        <Layout>
          {/* {this.getNavStyles(navStyle)} */}
          <Header style={{ backgroundColor: 'rgba(6, 12, 53, 0.829)' }}>
            <div>
              <Breadcrumb separator=">">{breadcrumbItems}</Breadcrumb>
            </div>
            <div>
              <Icon type="logout"
                style={{ fontSize: '25px', color: 'white' }}
                onClick={userSignOut} />
            </div>
          </Header>

          <Content className={`gx-layout-content `}>
            <RouteApp match={match} />
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

