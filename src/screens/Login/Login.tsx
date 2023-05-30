import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const Login = () => {
    return (
        <div style={{marginTop: "50px"}}>
            <h1>Login</h1>
            <Outlet/>
        </div>
    );
};

export default Login;