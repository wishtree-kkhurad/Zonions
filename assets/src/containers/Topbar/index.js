import React, { Component } from "react";
import { Layout, Popover,Icon, Breadcrumb, Card} from "antd";
import { Link, Redirect} from "react-router-dom";

import CustomScrollbars from "../../util/CustomScrollbars";
import languageData from "./languageData";
import { switchLanguage, toggleCollapsedSideNav } from "../../appRedux/actions/Setting";
import SearchBox from "../../components/SearchBox";
import UserInfo from "../../components/UserInfo";
import AppNotification from "../../components/AppNotification";
import MailNotification from "../../components/MailNotification";
import Auxiliary from "../../util/Auxiliary";
import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from "../../constants/ThemeSetting";
import { connect } from "react-redux";
import UserProfile from '../Sidebar/UserProfile'
const { Header } = Layout;

class Topbar extends Component {

  render() {
  
    const { locale, width, navCollapsed, navStyle } = this.props;
    return (
      <Auxiliary>
        <Header>      
          <div>
              <Breadcrumb separator=">">
                <Breadcrumb.Item className="gx-link" onClick={()=> {return(<Redirect to={'/home'} />)} }>Home</Breadcrumb.Item>
                <Breadcrumb.Item><span className="gx-link" onClick={()=> {return(<Redirect to={'/'} />)}}>Manage Restaurant</span></Breadcrumb.Item>
              </Breadcrumb>
          </div>
          <Link to='/signin'><Icon type="logout" style={{fontSize:'20px'}} /></Link>
        </Header>
      </Auxiliary>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale, navStyle, navCollapsed, width } = settings;
  return { locale, navStyle, navCollapsed, width }
};

export default connect(mapStateToProps, { toggleCollapsedSideNav, switchLanguage })(Topbar);
