import * as React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, Container, Grid} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import moment from "moment";

const displayNoResultsFound = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell className="span-body" align={"center"} style={{width: '20%'}}
                                   sx={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
                            Results not found.
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

// Function that will display the weather based on the argument
const displayWeather = weatherDetails => {
    if (!weatherDetails) return displayNoResultsFound();

    // Convert unix to timestamp
    const timestampObj = moment.unix(weatherDetails.dt);
    const result = timestampObj.format("MM/DD/YYYY")

    return (
        <>
            {
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
                                    {result}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {weatherDetails.main.temp}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {weatherDetails.weather[0].description}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {weatherDetails.weather[0].main}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {weatherDetails.main.pressure}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {weatherDetails.main.humidity}
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
                let appId: string = "5185503dca19cef88202028baf9f40ed";
                let url: string = `https://api.openweathermap.org/data/2.5/weather?q=${routeParam.id}&appid=${appId}`;
                const weatherResult = await axios.get(url);
                const {data} = weatherResult;
                setWeatherDetails(data);
            } catch (e) {
                console.log(e)
            }
        };

        fetchWeather();
    }, []);

    return (
        <Container component="main" maxWidth="s" sx={{marginTop: "80px"}}>
            <Box>
                {
                    displayWeather(weatherDetails)
                }
                <Button type="submit" variant="contained" sx={{mt: 3, mb: 2, float: "right"}}
                        onClick={() => navigate('/dashboard')}>
                    Back
                </Button>
            </Box>
        </Container>
    );
};

export default WeatherScreen;