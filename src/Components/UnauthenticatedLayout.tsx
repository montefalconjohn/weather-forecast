import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import {Container} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";

const UnauthenticatedLayout = () => {
    // If not authenticated, redirect it to login form
    const {isAuthenticated} = useAuth0();
    if (isAuthenticated) {
        return <Navigate to="/dashboard"/>
    }

    return (
        <Container maxWidth="lg" sx={{marginTop: "30px"}}>
            <NavigationBar/>
            <Outlet/>
        </Container>
    );
};

export default UnauthenticatedLayout;