
import React from "react";
import Minidrawer from './components/Drawer/Minidrawer'
import Navigation from './components/Navigation/Navigation'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Main from "./components/Main/Main";


const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }}>
      <Minidrawer/>
      <Navigation/>
      </Box>
  );
}


