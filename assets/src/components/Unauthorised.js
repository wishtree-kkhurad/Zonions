import React, { Component} from "react";
import { Button} from "antd";

const Unauthorised = (props) => (
    <div style={{
       marginTop:'12%',
       marginLeft:'3%',
       paddingTop:'20px',
       textAlign:'center'}}>
       <h1 style={{fontSize:'3rem'}}>401</h1>
       <h2 style={{fontSize:'2rem'}}>You are not Authorized to access this route</h2>
       {/* <Button type='primary' ghost onClick={() => history.back()}>Back</Button> */}
       <Button type='primary' ghost onClick={() => props.history.push('/landingpage')}>Back</Button>

    </div>
 );

 export default Unauthorised;