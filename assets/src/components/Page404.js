import React, { Component} from "react";
import { Button} from "antd";

const Page404 = ({ location }) => (
    <div style={{
       marginTop:'12%',
       marginLeft:'3%',
       paddingTop:'20px',
       textAlign:'center'}}>
       <h1 style={{fontSize:'3rem'}}>404</h1>
       <h2 style={{fontSize:'2rem'}}>No match found for <code>{location.pathname}</code></h2>
       <Button type='primary' ghost onClick={() => history.back()}>Back</Button>
    </div>
 );

 export default Page404;