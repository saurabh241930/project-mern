import { makeStyles,createTheme} from '@material-ui/styles';

export default makeStyles({
    AppBar:{
        // background:`url("${props.backgroundImageLink}")`,
        objectFit: 'cover',
        color:'black',
        height:'300px'
    },
    Text:{
        backgroundColor:'rgba(0,0,0,0.4)',
        padding:'10px',
        color:'white',
        position: 'absolute',
        top:'10px',
        left:'10px'
    },
    Button:{
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:'10px'
    },
    marblesList:{
        marginTop:'300px'
    }
});





