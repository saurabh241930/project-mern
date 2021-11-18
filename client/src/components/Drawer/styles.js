import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'black',
    marginBottom:'50px'
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
    fontSize:'40px'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logout:{
    textAlign:'centre'
  }

}));