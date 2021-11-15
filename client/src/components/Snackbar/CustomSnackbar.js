import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";

const CustomSnackbar = (props) => {
  const classes = useStyles();

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props.handleSnackBarCloseProp}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const message = (
    <>
      <Typography className={classes.qualityName} variant="h4">
        {props.childText}
      </Typography>
      <Typography>{props.actionTypeText}</Typography>
    </>
  );
  return (
    <div className={classes.Snackbar}>
      <Snackbar
        className={classes.Snackbar}
        anchorOrigin={(props.vertical, props.horizontal)}
        open={props.openState}
        autoHideDuration={3000}
        onClose={props.handleSnackBarCloseProp}
        message={message}
        action={action}
      />
    </div>
  );
};
export default CustomSnackbar;
