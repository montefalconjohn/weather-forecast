import * as React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {ReactElement} from "react";
import {Box, Container} from "@mui/material";
import WeatherSearchForm from "../Weather/WeatherSearchForm";

const Dashboard = (): ReactElement => {
    const {user} = useAuth0();
    if (!user) return;
    return (
        <Container component="main" maxWidth="xs" sx={{marginTop: "80px"}}>
            <Box sx={{textAlign: "center"}}>
                <p>{user.name}</p>
                <p>https://github.com/{user.nickname}</p>
                <WeatherSearchForm/>
            </Box>
        </Container>
    );
};

export default Dashboard;