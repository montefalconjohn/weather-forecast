// @flow
import * as React from 'react';
import {useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import NavigationBar from "./NavigationBar";

const ProtectedLayout = () => {
    // If not authenticated, redirect it to login form

    const[auth, setAuth] = useState<boolean>(false);
    if (!auth) {
        return <Navigate to="/login"/>
    }

    return (
        <Container maxWidth="lg" sx={{marginTop: "30px"}}>
            <NavigationBar/>
            <Outlet/>
        </Container>
    );
};

export default ProtectedLayout;