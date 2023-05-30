import * as React from 'react';
import {Box, Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const WeatherSearchForm = () => {
    const[searchKeyword, setSearchKeyword] = useState<string>("");
    const[isDisabled, setDisable] = useState<boolean>(true);
    const navigate = useNavigate();

    const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
        setSearchKeyword(e.target.value);
        setDisable(false);
    };

    const handleSubmitButton = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let url: string = `/weathers/${searchKeyword}`;
        navigate(url)
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
            <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}} onClick={handleSubmitButton} disabled={isDisabled}>
                Display Weather
            </Button>
        </Box>
    );
};

export default WeatherSearchForm;