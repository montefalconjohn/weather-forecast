import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Container} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

type WeatherScreenProps = {
    [key: string]: any;
}

// Function that will display the weather based on the argument
const displayWeather = (weatherDetails): JSX.Element => {
    return (
        <>
            {
                Object.keys(weatherDetails).length < 1 ?
                    <TableCell className="span-body" align={"center"} style={{width: '20%'}}
                               sx={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
                        Results not found.
                    </TableCell> :
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date (mm/dd/yyyy)</TableCell>
                                    <TableCell>Temp(F)</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Main</TableCell>
                                    <TableCell>Pressure</TableCell>
                                    <TableCell>Humidity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.date}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.temp}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.description}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.main}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.pressure}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {weatherDetails.humidity}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </>
    );
}

const WeatherScreen = () => {
    const routeParam = useParams();
    const navigate = useNavigate();

    const[weatherDetails, setWeatherDetails] = useState<[] | null>(null);
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                let appId: string = "b1aab4e616aa07c3e8a48526923482ac";
                let url: string = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${routeParam.id}&appid=${appId}`;
                const weatherResult = await axios.get(url);
                console.log(weatherResult)
            } catch (e) {
                console.log(e)
            }
        };

        fetchWeather();
    }, []);


    return (
        <Container component="main" maxWidth="s" sx={{marginTop: "80px"}}>
            <Box sx={{textAlign: "center"}}>
                {
                    displayWeather({date: "09/01/2020", temp: 75, description: "Sky is clear", main: "Clear", pressure: 1023.68, humidity: "100"})
                }
                <Button type="submit" align={"right"} variant="contained" sx={{mt: 3, mb: 2}} onClick={() => navigate('/dashboard')}>
                    Back
                </Button>
            </Box>
        </Container>
    );
};

export default WeatherScreen;