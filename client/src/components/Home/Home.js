import { getAngles } from '../../actions/angles';
import { Container, Grow, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './styles';


import Angles from '../Angles/Angles';
import { useDispatch } from 'react-redux';


const Home = () => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAngles());
  }, [currentId, dispatch]);


    return (
    <Grow in>
       <Container>
         <Grid className={classes.adjustTop} container justify="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={12}>
             <Angles setCurrentId={setCurrentId} />
           </Grid>
         </Grid>
       </Container>
     </Grow>
    )
}

export default Home
