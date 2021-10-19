import * as React from 'react';
import {CssBaseline,Button,DialogActions,DialogContent,DialogTitle,Dialog,Box,Grid} from '@mui/material';
import { InputUnstyled } from '@mui/core';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Input from '../Utils/CustomInput'
import { GoogleLogin } from 'react-google-login';
import { AUTH } from '../../constants/actionTypes';
import Icon from './Icon';
import { useDispatch } from 'react-redux';


import useStyles from './styles';


const StyledContainer = styled('div')(`
   &:focus-within input {
     outline: none;
     transition: width 200ms ease-out;
     text-align:centre;
     
   }
`)


const AuthDialog = (props) => {


  const classes = useStyles();
  const isLoggedIn = false;
  const [showPassword,showSetPassword] = React.useState(false)
  const [forgotPassword,toggleShowPassword] = React.useState(false)
  const dispatch = useDispatch();

  function handleChange() {
  
  }
  
  const handleShowPassword = () => {
    showSetPassword(true)
  }

  const handleForgotPassword = () => {
    forgotPassword ? toggleShowPassword(false) : toggleShowPassword(true)
  }


  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    props.handleDialogCloseProp()


    try {
      dispatch({ type: AUTH, data: { result, token } });

      props.historyProp.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => console.error(error);


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
        <br/>
        <DialogContent>
          <Grid>
          { forgotPassword && (
            <>
            <StyledContainer>
            <form className={classes.form}>
              <Input name="email" label="First Name" placeholder="enter your last mail" handleChange={handleChange} autoFocus /><br/><br/>
              <Button type="submit" fullWidth variant="contained" color="primary" >Send token on mail</Button>
              </form>
            </StyledContainer>
            <br/>
            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={handleForgotPassword}>Back to login</Button>
            </Grid>
          </Grid>
            </>
            )}


        {  !forgotPassword && (
            <>
            <StyledContainer>
            <form className={classes.form}>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" placeholder="email" /> 
            <br/><br/>
            <Input name="password" label="Password" placeholder="password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <br/><br/>
            <Button type="submit" fullWidth variant="contained" color="primary" >
            { isLoggedIn ? 'Log Out' : 'Log In' }
            </Button>
            <br/><br/>
            <GoogleLogin
            clientId="399831739132-gov2p8rf29074mvuqhgcu09vle7k2atg.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={false} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
            </form>
            </StyledContainer>
            <br/>
            <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={handleForgotPassword}>Forgot password?</Button>
            </Grid>
          </Grid>
            </>
            )}

          
          </Grid>
        
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