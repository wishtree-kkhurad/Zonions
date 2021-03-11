import React, { Component} from "react";

const Page404 = ({ location }) => (
    <div>
       <h1>404</h1>
       <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
 );

 export default Page404;