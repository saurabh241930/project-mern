import React from 'react';
import { Grid, CircularProgress, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import Category from './Category/Category';
import CustomSnackbar from '../Snackbar/CustomSnackbar';
import CartDialog from '../Dialog/CartDialog';
import BasicTable from '../DataTable/DataTable';
import CategoryGrid from './Category/CategoryGrid';
import CategoryList from './Category/CategoryList';

import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { getMarblesByCategory } from '../../actions/marbles';


const Categories = ({ currUser, viewState }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [snackbarOpenProp, setSnackbarOpenProp] = React.useState(false);
  const [snackbarChildProp, setSnackbarChildProp] = React.useState('');
  const [CartDialogOpenState, setCartDialogOpenState] = React.useState(false)
  const [MarbleDetailOnDialog, setMarbleDetailOnDialog] = React.useState(null)
  const currentUser = currUser;

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
    currentUser == null ? <><Typography variant="h5">Your session is expired ,<br/>please login again to view categories :(<br/><br/><Button variant="outlined" color="primary">Login Again</Button></Typography></>: (
    viewState == 'grid' ? (<><CategoryGrid classes={classes} categories={categories} handleSnackBarCloseAction={handleSnackBarCloseAction} handleViewMarbleCategory={handleViewMarbleCategory} snackbarOpenProp={snackbarOpenProp} snackbarChildProp={snackbarChildProp} /></>) :
      viewState == 'list' ? <><CategoryList dataToRender={categories} /></> :
        <></>
    )
  );
};

export default Categories;

