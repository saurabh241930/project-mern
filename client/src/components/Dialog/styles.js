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
  },
  video:{
    // width: 90%;
    // height: 30vw;
    // overflow: hidden;
    // border: 15px solid red;
    // margin-bottom: 40px;
    // position: relative;
  },
  videoBackground:{
    width: '100%', 
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex:'-1' 
  },

  videoInsert:{
    position: 'absolute',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-100',
    backgroundSize: 'cover',
    overflow: 'hidden',
  }
  
}));



