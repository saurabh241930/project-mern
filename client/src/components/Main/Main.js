import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import useStyles from './styles';





const Main = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.box} sx={{ flexGrow: 1 }}>
            {props.childText == 'home' ?
                <Home/>:
                <Auth/>
            }            
        </Box>

        
        
    )
}

export default Main
