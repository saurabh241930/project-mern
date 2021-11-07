import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import RegisterClient from '../RegisterClient/RegisterClient'
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import useStyles from './styles';
import PassPropsToChildComponents from './PassPropsToChildComponents'
import { useSelector } from 'react-redux';
import Map from '../Map/Map';



const mapKeyToComponent = (key) => {
    switch (key) {
        case 'categories':
            return <Home />
        case 'auth':
            return <Auth/>
        case 'map':
            return <Map/>
        case 'registerClient':
            return <RegisterClient/>     
        default:
            return <Home/>    
    }
}



const Main = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.box} sx={{ flexGrow: 1 }}>
            <PassPropsToChildComponents currUser={props.currUser}>
                {mapKeyToComponent(props.childText)}
            </PassPropsToChildComponents>         
        </Box>

        
        
    )
}

export default Main
