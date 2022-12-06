import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";


export default function Search() {

    const [toSearch, setToSearch] = useState('');

    const handleChangeToSearch = event => {
        setToSearch(event.target.value);
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            window.location.replace(`/search/${toSearch}`)
        }
    }
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="Search" id="fullWidth" onKeyDown={handleKeyDown} onChange={handleChangeToSearch} />
        </Box>
    );
}
