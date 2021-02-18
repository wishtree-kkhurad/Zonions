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
import {withRouter} from 'react-router-dom';
import {userSignOut} from "../../appRedux/actions/Auth";

const { Header } = Layout;

class Topbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  
  render() {
    const goToHome = () => {
      this.props.history.push({pathname:'/home'});
    }
    const goToManage = () => {
      this.props.history.push({pathname:'/restaurant/manage'});
    }
    const userSignOut = () =>{
      localStorage.removeItem('user_id');
      this.props.history.push({pathname:'/landingpage'});
    }
    return (
      
        <Header>      
          <div>
              <Breadcrumb separator=">">
                <Breadcrumb.Item className="gx-link" onClick={goToHome} >Home</Breadcrumb.Item>
                <Breadcrumb.Item><span className="gx-link" onClick={goToManage}>Manage Restaurant</span></Breadcrumb.Item>
              </Breadcrumb>
          </div>
          <div>
            <h1>All Restaurants</h1>
          </div>
          <Icon type="logout" style={{fontSize:'25px', color:'steelblue'}} onClick={userSignOut}/>
        </Header>
      
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale, navStyle, navCollapsed, width } = settings;
  return { locale, navStyle, navCollapsed, width }
};

export default connect(mapStateToProps, { toggleCollapsedSideNav, switchLanguage })(withRouter(Topbar));