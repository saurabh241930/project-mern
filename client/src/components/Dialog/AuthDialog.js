import * as React from 'react';
import {CssBaseline,Button,DialogActions,DialogContent,DialogTitle,Dialog,Box} from '@mui/material';
import { InputUnstyled } from '@mui/core';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
const ariaLabel = { 'aria-label': 'description' };

const StyledInputElement = styled('input')(`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #E5E8EC;
  border-radius: 2px;
  padding: 6px 10px;
  color: #20262D;
  transition: width 300ms ease;

  &:hover {
    background: #EAEEF3;
    border-color: #E5E8EC;
    border-radius:0px
  }

  &:focus {
    outline: none;
    width: 320px;
    transition: width 200ms ease-out;
    order-radius:0px;
    background:#ffd180;
  }
`);

const StyledContainer = styled('div')(`
   &:focus-within input {
     outline: none;
     width: 320px;
     transition: width 200ms ease-out;
     text-align:centre;
     
   }
`)

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

 
const AuthDialog = (props) => {

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
        <DialogTitle>Please login</DialogTitle>
        <DialogContent>

          <StyledContainer>
            <CustomInput aria-label="Demo input" placeholder="Username" />
            <br/>
            <CustomInput onClick aria-label="Demo input" placeholder="Password" />
            <br/>
            <Button style={{'marginRight':'0 auto'}} onClick={props.handleDialogCloseProp} variant="contained">login</Button>
          </StyledContainer>
        
        </DialogContent>
        <DialogActions style={{'textAlign':'center'}}>
          
          <Button onClick={props.handleDialogCloseProp}><ClearIcon/></Button>
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


export default AuthDialog;