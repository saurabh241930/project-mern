
import React from "react";
import Minidrawer from './components/Drawer/Minidrawer'
import Navigation from './components/Navigation/Navigation'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Main from "./components/Main/Main";
import PassPropsToNormalComponents from "./components/Main/PassPropsToChildComponents";
import { useLocation } from "react-router";



const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const location = useLocation();
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location])

  const currUser = user?.result
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }}>
      <PassPropsToNormalComponents currUser={currUser} setUser={setUser}>
        <Minidrawer/>
        <Navigation/>
      </PassPropsToNormalComponents>
      
      </Box>
  );
}


