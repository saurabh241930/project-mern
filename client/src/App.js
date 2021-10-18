// import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Navbar from './components/Navbar/Navbar';
// import Drawer from './components/Navbar/Drawer'
// import Home from './components/Home/Home';
// import Auth from './components/Auth/Auth';


// const App = () => (
//   <Navbar/>
//   // <BrowserRouter>
//   // <Navbar />
//   //   <Container maxWidth="lg">
//   //     <Switch>
//   //       <Route path="/" exact component={Home} />
//   //       <Route path="/auth" exact component={Auth} />
//   //     </Switch>
//   //   </Container>
//   // </BrowserRouter>
// );

// export default App;


import React from "react";
import { Route, Switch } from "react-router-dom";
import Minidrawer from './components/Drawer/Minidrawer'
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
      <Minidrawer />
      <Switch>
        <Route exact from="/" render={props => <Main childText="home" {...props} />} />
        <Route exact path="/auth" render={props => <Main childText="auth" {...props} />} />
        <Route exact path="/register-client" render={props => <Main childText="registerClient" {...props} />} />
      </Switch>
      </Box>
  );
}


