import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    const user = null

    return (
    <AppBar className={classes.appBar} color="inherit" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">CMC</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
          </div>
        ) : (

      <Button color="secondary" component={Link} to="/auth" variant="contained">SIGN IN</Button>

        )}
      </Toolbar>
    </AppBar>
    )
}

export default Navbar
