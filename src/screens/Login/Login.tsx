import * as React from 'react';
import {Box, Button, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import {ReactElement} from "react";
import useStore from "../../services/zustand/store";

const theme = createTheme();

const Login = (): ReactElement => {
    const {loginWithPopup} = useAuth0();

    // Set check cookies state
    const {setCheckCookies} = useStore(state => state);

    // This function will run everytime the button log in was clicked and if it's success, setCheckCookies will set a true for state
    const handleOnClick = () => {
        loginWithPopup()
            .then(response => {
                setCheckCookies(true);
            })
            .catch(err => {
                console.log(err)
            })
        }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="s" sx={{marginTop: "80px"}}>
                <CssBaseline/>
                <Box>
                    <p>
                        Welcome to the weather forecast web application.
                        Please login with your Github user to use the application and view the weather in your city.
                    </p>
                    <Button type="submit" variant="contained" onClick={handleOnClick}>
                        Log In
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;