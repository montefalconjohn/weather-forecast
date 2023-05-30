import * as React from 'react';
import {Box, Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {useState} from "react";
import axios from "axios";

const WeatherSearchForm = () => {
    const[searchKeyword, setSearchKeyword] = useState<string>("");

    const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
        setSearchKeyword(e.target.value);
    };

    const fetchWeather = async (searchKeyword: string) => {
        try {
            let appId: string = "b1aab4e616aa07c3e8a48526923482ac";
            let url: string = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${searchKeyword}&appid=${appId}`;
            const weatherResult = await axios.get(url);
            console.log(weatherResult)
        } catch (e) {
            console.log(e)
        }
    };

    const handleSubmitButton = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        fetchWeather(searchKeyword);
        console.log(searchKeyword);
        console.log('here')
    };

    return (
        <Box component="form" onChange={handleFormChange} noValidate sx={{mt: 5}}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="searchKeyword"
                label="Search Keyword"
                name="searchKeyword"
                value={searchKeyword}
                autoComplete="email"
                autoFocus
                InputProps={{startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        )}}
            />
            <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}} onClick={handleSubmitButton}>
                Display Weather
            </Button>
        </Box>
    );
};

export default WeatherSearchForm;