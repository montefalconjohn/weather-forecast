// @flow
import * as React from 'react';
import {useState} from "react";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedLayout = () => {
    // If not authenticated, redirect it to login form

    const[auth, setAuth] = useState<boolean>(false);
    if (!auth) {
        return <Navigate to="/login"/>
    }
    console.log('here')
    return (
        <div>
            <h1>Dashboarrd</h1>
            <Outlet/>
        </div>
    );
};

export default ProtectedLayout;