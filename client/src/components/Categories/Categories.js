import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

import Category from './Category/Category';
import CustomSnackbar from '../Snackbar/CustomSnackbar';
import CartDialog from '../Dialog/CartDialog';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { getMarblesByCategory } from '../../actions/marbles';

const Categories = ({ setCurrentId }) => {
const dispatch = useDispatch();
const categories = useSelector((state) => state.categories);
const [snackbarOpenProp, setSnackbarOpenProp] = React.useState(false);
const [snackbarChildProp, setSnackbarChildProp] = React.useState('');
const [CartDialogOpenState,setCartDialogOpenState] = React.useState(false)
const [MarbleDetailOnDialog,setMarbleDetailOnDialog] = React.useState(null)

const classes = useStyles();

const handleSnackBarCloseAction = () => {
  setSnackbarOpenProp(false)
}

const handleViewMore = (marble) => {
  setMarbleDetailOnDialog(marble)
  setCartDialogOpenState(true)
}

const handleDialogClose = () => {
  setCartDialogOpenState(false)
}

const handleViewMarbleCategory = (qualityName) => {
  setSnackbarOpenProp(true)
  setSnackbarChildProp(qualityName)
  dispatch(getMarblesByCategory(qualityName))
}


  return (
    !categories.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {categories.map((category) => (
          <Grid key={category._id} item xs={12} sm={6} md={4}>
            <Category category={category} setCurrentId={setCurrentId} handleViewMarbleCategory={handleViewMarbleCategory}/>
          </Grid>
        ))}
        <CustomSnackbar openState={snackbarOpenProp} childText={snackbarChildProp} handleSnackBarCloseProp={handleSnackBarCloseAction}/>
      </Grid>
    )
  );
};

export default Categories;

