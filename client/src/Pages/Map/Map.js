import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { Stack, Button, Divider } from "@mui/material";
import {
  getMarblesAnglewise,
  getMarblesByCategory,
} from "../../actions/marbles";
import { cartAction } from "../../actions/cart";

import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import CartDialog from "../../components/Dialog/CategoryDialog";
import Angle from "../../components/Angle/Angle";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Map = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [CartDialogOpenState, setCartDialogOpenState] = React.useState(false);
  const [MarbleDetailOnDialog, setMarbleDetailOnDialog] = React.useState(null);
  const [snackBarState, setSnackBarState] = React.useState({
    snackbarOpenProp: false,
    snackbarChildProp: null,
    snacbarActionText: null,
    vertical: null,
    horizontal: null,
  });
  console.log(props);

  const cart = useSelector((state) => state.cart);
  const cartList = cart?.cart?.cartList;

  const isExistInCart = (marbleId) => {
    const foundMarble =  cartList?.filter(
      (marble) => marble._id == marbleId
    );
    return foundMarble && foundMarble.length == 0 
  };
  const handleViewMore = (marble) => {
    setMarbleDetailOnDialog(marble);
    setCartDialogOpenState(true);
  };

  const handleSnackBarCloseProp = () => {
    setSnackBarState({
      snackbarOpenProp: false,
      snackbarChildProp: null,
      snacbarActionText: null,
      vertical: null,
      horizontal: null,
    });
  };

  const handleDialogClose = () => {
    setCartDialogOpenState(false);
  };

  const handleAddToCart = (marbleId, qualityName) => {
    dispatch(cartAction(marbleId));
    setSnackBarState({
      snackbarOpenProp: true,
      snackbarChildProp: qualityName,
      snacbarActionText: isExistInCart(marbleId)
        ? "added to cart"
        : "removed from cart",
      vertical: "bottom",
      horizontal: isExistInCart(marbleId) ? "right" : "left",
    });
  };

  React.useEffect(() => {
    dispatch(getMarblesAnglewise());
  }, [dispatch]);

  const marblesAnglewise = useSelector((state) => state.marbles);

  return (props.currUser === null)  ? 
    <></>:
    (marblesAnglewise?.length === 0) ?
    <CircularProgress />
    :(
    <>
      <Stack
        className={classes.stack}
        direction="row"
        justifyContent="space-around"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button variant="text" color="success" disabled>
          Block C1
        </Button>
      </Stack>
      <Grid
        container
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {marblesAnglewise.map((marbles) => (
          <Grid
            className={classes.angles}
            container
            key={marbles._id}
            item
            xs={12}
            sm={2}
            md={2}
          >
            <Angle
              marbles={marbles}
              handleViewMore={handleViewMore}
              handleAddToCart={handleAddToCart}
              isExistInCart={cart.cart && isExistInCart}
              currUser={props.currUser}
            />
          </Grid>
        ))}
        <CartDialog
          dilaogOpenProp={CartDialogOpenState}
          showMarbleOnDialog={MarbleDetailOnDialog}
          onDialogClose={handleDialogClose}
          currUser={props.currUser}
        />
        <CustomSnackbar
          openState={snackBarState.snackbarOpenProp}
          childText={snackBarState.snackbarChildProp}
          actionTypeText={snackBarState.snacbarActionText}
          handleSnackBarCloseProp={handleSnackBarCloseProp}
        />
      </Grid>
    </>
  );
};

export default Map;
