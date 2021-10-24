import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: 2,
  },
  actionDiv: {
    textAlign: 'center',
  },
  container:{
    paddingLeft:'100px',
    paddingRight:'100px'
  },
  addNewClient:{
    backgroundColor:'#f5f5f5',
    padding:'20px',
    textAlign:'center'

  },
  title:{
    paddingBottom:'50px'
  },
  form:{
    width:'100%'
  }
}));
