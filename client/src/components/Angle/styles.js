import { makeStyles } from '@mui/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    backgroundColor:'rgba(0,0,0,0.3)',
    padding:'10px'
  },
  overlay2: {
    position: 'absolute',
    backgroundColor:'rgba(255, 165, 0,0.5)',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  addButton:{
    marginLeft:'auto'
  },
  action:{
    display:'none'
  },
  img:{
    maxWidth:'50px',
    maxHeight:'50px',
    objectFit:'cover',
    backgroundRepeat:'space',
    borderStyle:'solid',
    borderWidth:'1px',
    borderColor:'#6b6b6b'
  },
  angle:{
    textAlign:'center',
  },
  angleNoLabel:{
    textAlign:'center',
    fontSize:'10px',
    color:'rgba(0,0,0,0.5)'
    
  },
  angleText:{
    padding:'5px',

  },
  marbleGrid:{
    textAlign:'center',
   
    
  },
  marbleName:{
    fontSize:'12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '75ch'
  },
  cartButton:{
    marginTop:'10px'
  }
});
