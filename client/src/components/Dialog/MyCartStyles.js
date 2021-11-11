import { makeStyles,createTheme } from '@material-ui/styles';



export default makeStyles(theme => ({
    AppBar:{
        backgroundColor:'orange'
    },
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
      bottom: '20px',
      right: '20px',
      color: 'white',
    },
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
      position: 'relative'
    },
    marbleDetails:{
      paddingLeft:"10px"
    },
    removeButton:{
      alignSelf:"end",
    }
    

}));



