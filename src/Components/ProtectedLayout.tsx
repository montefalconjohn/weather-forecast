// @flow
import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import NavigationBar from "./NavigationBar";
import {useAuth0} from "@auth0/auth0-react";

const ProtectedLayout = () => {
    // If not authenticated, redirect it to login form
    const {isAuthenticated} = useAuth0();
    if (!isAuthenticated) {
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