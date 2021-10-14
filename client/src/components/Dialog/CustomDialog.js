import * as React from 'react';
import {CssBaseline,Button,DialogActions,DialogContent,DialogTitle,Dialog,Box} from '@mui/material';

const CustomDialog = (props) => {


  return (
    <>
      <CssBaseline />
      <Dialog
        fullWidth
        onClose={() => {}}
        open={props.dilaogOpenProp}
        maxWidth="xs"
        sx={{
          backdropFilter: "blur(5px)",
        }}
      >
        <DialogTitle>Example Dialog</DialogTitle>
        <DialogContent>Example Content Here</DialogContent>
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
}


export default CustomDialog;