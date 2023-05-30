import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import {Button, CssBaseline} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import useStore from "../services/zustand/store";

const NavigationBar = () => {
    const {logout} = useAuth0();
    const {setCheckCookies, setUser} = useStore((state) => ({
        setUser: state.setUser,
        setCheckCookies: state.setCheckCookies
    }));

    const handleLogout = () => {
        logout()
        setCheckCookies(false);
        setUser(null)
    }
    const {checkedCookies} = useStore(state => state);
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar component="nav" sx={{backgroundColor: "white"}}>
                <Toolbar>
                    <CloudIcon sx={{height: "50px", width: "50px", marginRight: "15px", color: "black"}}/>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, color: "black"}}>
                        Weather Forecast
                    </Typography>
                    {
                        checkedCookies &&
                        <Button onClick={handleLogout}>
                            <h1 style={{color: "black"}}>Logout</h1>
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;