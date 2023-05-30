import * as React from 'react';
import {Box, Button, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme();

const Login = () => {
    const handleOnClick = () => {
        console.log('here');
    };
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