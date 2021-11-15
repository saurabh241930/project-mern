import * as React from "react";
import {
  CssBaseline,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Box,
} from "@mui/material";
import Input from "@mui/material/Input";
const ariaLabel = { "aria-label": "description" };

const CustomDialog = (props) => {
  return (
    <>
      <CssBaseline />
      <Dialog
        fullWidthS
        onClose={() => {}}
        open={props.dilaogOpenProp}
        maxWidth="xs"
        sx={{
          backdropFilter: "blur(3px)",
        }}
      >
        <DialogTitle>Example Dialog</DialogTitle>
        <DialogContent>
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogCloseProp}>Close</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "url(https://source.unsplash.com/random) no-repeat center center",
          backgroundSize: "cover",
        }}
      ></Box>
    </>
  );
};

export default CustomDialog;
