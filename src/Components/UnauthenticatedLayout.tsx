import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useState} from "react";

const UnauthenticatedLayout = () => {
    // If not authenticated, redirect it to login form
    const[auth, setAuth] = useState<boolean>(false);
    if (auth) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default UnauthenticatedLayout;