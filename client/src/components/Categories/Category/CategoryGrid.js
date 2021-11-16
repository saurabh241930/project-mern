import React from "react";
import { Grid, Typography } from "@mui/material";
import Category from "./Category";
import CustomSnackbar from "../../Snackbar/CustomSnackbar";
import CategoryDialog from "../../Dialog/CategoryDialog";

const CategoryGrid = ({
  classes,
  categories,
  handleSnackBarCloseAction,
  handleViewMarbleCategory,
  snackbarOpenProp,
  snackbarChildProp,
  handleViewMore,
  handleDialogClose,
  CategoryDialogOpenState,
  showCategoryMarbleOnDialog,
  currUser
}) => {
  return (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {categories.map((category) => (
          <Grid key={category._id} item xs={12} sm={6} md={4}>
            <Category
              category={category}
              handleViewMarbleCategory={handleViewMarbleCategory}
            />
          </Grid>
        ))}
        {/* <CustomSnackbar
          openState={snackbarOpenProp}
          childText={snackbarChildProp}
          handleSnackBarCloseProp={handleSnackBarCloseAction}
        /> */}
        <CategoryDialog
          dilaogOpenProp={CategoryDialogOpenState}
          
          showCategoryMarbleOnDialog={showCategoryMarbleOnDialog}
          onDialogClose={handleDialogClose}
          currUser={currUser}
        />
      </Grid>
    </>
  );
};

export default CategoryGrid;
