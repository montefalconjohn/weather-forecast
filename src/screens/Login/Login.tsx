import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const Login = () => {
    console.log('here')
    return (
        <div>
            <h1>Login</h1>
            <Outlet/>
        </div>
    );
};

export default Login;