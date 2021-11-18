import React from "react";
import { Grid, CircularProgress, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import Category from "./Category/Category";
import CustomSnackbar from "../Snackbar/CustomSnackbar";
import CategoryDialog from "../Dialog/CategoryDialog";
import BasicTable from "../DataTable/DataTable";
import CategoryGrid from "./Category/CategoryGrid";
import CategoryList from "./Category/CategoryList";

import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { getMarblesByCategory } from "../../actions/marbles";

const Categories = ({ currUser, viewState, categories }) => {
  const dispatch = useDispatch();
  const [snackbarOpenProp, setSnackbarOpenProp] = React.useState(false);
  const [snackbarChildProp, setSnackbarChildProp] = React.useState("");
  const [CategoryDialogOpenState, setCategoryDialogOpenState] =
    React.useState(false);
  const [showCategoryMarbleOnDialog, setMarbleDetailOnDialog] =
    React.useState(null);

  const classes = useStyles();

  const handleSnackBarCloseAction = () => {
    setSnackbarOpenProp(false);
  };

  const handleViewMore = (marble) => {
    setMarbleDetailOnDialog(marble);
    setCategoryDialogOpenState(true);
  };

  const handleDialogClose = () => {
    setCategoryDialogOpenState(false);
  };

  const handleViewMarbleCategory = (category, qualityName) => {
    setMarbleDetailOnDialog(category);
    setCategoryDialogOpenState(true);
    dispatch(getMarblesByCategory(qualityName));
  };

  return viewState == null ? (
    <>
      <Typography variant="h5">
        Your session is expired ,<br />
        please login again to view categories :(
        <br />
        <br />
        <Button variant="outlined" color="primary">
          Login Again
        </Button>
      </Typography>
    </>
  ) : viewState == "grid" ? (
    <>
      <CategoryGrid
        classes={classes}
        categories={categories}
        handleSnackBarCloseAction={handleSnackBarCloseAction}
        handleViewMarbleCategory={handleViewMarbleCategory}
        snackbarOpenProp={snackbarOpenProp}
        snackbarChildProp={snackbarChildProp}
        handleViewMore={handleViewMore}
        CategoryDialogOpenState={CategoryDialogOpenState}
        showCategoryMarbleOnDialog={showCategoryMarbleOnDialog}
        handleDialogClose={handleDialogClose}
        currUser={currUser}
      />
    </>
  ) : viewState == "list" ? (
    <>
      <CategoryList dataToRender={categories} />
    </>
  ) : (
    <></>
  );
};

export default Categories;
