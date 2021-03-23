import React from 'react';
import StarRatingComponent from "react-star-rating-component";
import {Col, Button, Card, Row} from "antd";
import SweetAlerts from '../../routes/extraComponents/SweetAlert/index'
import { render } from 'react-dom';
class UserAfterLogin extends React.Component{
    clickHandler = ()=>{
        // console.log('checking for sweet alerts');
        // return <SweetAlerts />
        alert('We are coming up with this feature soon...')
    }
    render(){
        return(
            <div style={{marginTop:'8%'}}>
                <h1 style={{fontSize:'3rem', textAlign:'center'}}>Welcome To Zonions</h1>
                <div style={{marginLeft:'35%'}}>
                    <Button type='primary' onClick={this.clickHandler}>Book a Table</Button>
                    <Button type='primary' onClick={this.clickHandler}>Order Food At Home</Button>
                </div>
            </div>
        )
    }
}
export default UserAfterLogin