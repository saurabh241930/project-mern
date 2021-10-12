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
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { Route, Switch } from "react-router-dom";
import Drawer from './components/Main/Drawer';
import Minidrawer from './components/Main/Minidrawer'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Minidrawer />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/auth" render={props => <Auth {...props} />} />
      </Switch>
    </div>
  );
}


