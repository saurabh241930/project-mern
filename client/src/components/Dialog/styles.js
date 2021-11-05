import { makeStyles,createTheme } from '@material-ui/styles';



export default makeStyles(theme => ({
  paper: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
  avatar: {
    margin: '10px',
  },
  form: {
      textAlign:'centre',
      
  },
  submit: {
    margin: '10px',
  },
  googleButton: {
    marginBottom: '10px',
  },
  marbleImage:{
    backgroundColor:'red'
  }
}));



