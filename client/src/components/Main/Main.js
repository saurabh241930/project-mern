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



const mapKeyToComponent = (key) => {
    switch (key) {
        case 'home':
            return <Home />
        case 'auth':
            return <Auth/>
        case 'registerClient':
            return <RegisterClient/>     
        default:
            return <Home/>    
    }
}



const Main = (props) => {
    const classes = useStyles();
    const user = useSelector((state) => state.auth);

    return (
        <Box className={classes.box} sx={{ flexGrow: 1 }}>
            <PassPropsToChildComponents currUser={user}>
                {mapKeyToComponent(props.childText)}
            </PassPropsToChildComponents>         
        </Box>

        
        
    )
}

export default Main
