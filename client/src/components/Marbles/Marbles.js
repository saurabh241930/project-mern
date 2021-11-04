// import { getCategories } from '../../actions/categories';
// import { Container, Grow,Grid } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import CustomSnackbar from '../Snackbar/CustomSnackbar';
// import useStyles from './styles';


// import Categories from '../Categories/Categories';
// import { useDispatch } from 'react-redux';


// const Home = (props) => {

//   const [currentId, setCurrentId] = useState(0);
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [currentId, dispatch]);


//     return (
//     <Grow in>
//        <Container>
//          <Grid className={classes.adjustTop} container justify="space-between" alignItems="stretch" spacing={3}>
//            <Grid item xs={12} sm={12}>
//              <Categories setCurrentId={setCurrentId} />
//            </Grid>
//          </Grid>
//        </Container>
//      </Grow>

//     )
// }

// export default Home


