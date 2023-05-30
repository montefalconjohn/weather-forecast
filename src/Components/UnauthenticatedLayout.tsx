import * as React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import {Container} from "@mui/material";
import useStore from "../services/zustand/store";

const UnauthenticatedLayout = () => {
    // If not authenticated, redirect it to login form
    const checkedCookies = useStore(state => state.checkedCookies);
    if (checkedCookies) {
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