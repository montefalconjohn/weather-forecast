import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useState} from "react";
import NavigationBar from "./NavigationBar";
import {Container} from "@mui/material";

const UnauthenticatedLayout = () => {
    // If not authenticated, redirect it to login form
    const[auth, setAuth] = useState<boolean>(false);
    if (auth) {
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