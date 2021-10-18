import React from 'react'
import useStyles from './styles';
import { Grid ,Typography} from '@mui/material';



const RegisterClient = (props) => {
    const classes = useStyles();
    return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Typography variant="h1">R</Typography> 
      </Grid>
    )
}

export default RegisterClient;
