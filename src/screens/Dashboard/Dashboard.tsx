import * as React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {ReactElement} from "react";
import {Box, Container} from "@mui/material";

const Dashboard = (): ReactElement => {
    const {user} = useAuth0();
    const {name, nickname} = user;
    return (
        <Container component="main" maxWidth="s" sx={{marginTop: "80px"}}>
            <Box sx={{textAlign: "center"}}>
                <p>{name}</p>
                <p>https://github.com/{nickname}</p>
            </Box>
        </Container>
    );
};

export default Dashboard;