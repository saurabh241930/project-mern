import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import useStyles from './MyCartStyles.js'
import { Card ,CardMedia} from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MyCartDialog = (props) => {
  const classes = useStyles();
  const cartList = props.cartList;


  return (
    <div>
      <Dialog
        fullScreen
        open={props.openProp}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.AppBar} sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={props.handleCartDialogClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Cart
            </Typography>
            <Button autoFocus color="inherit" onClick={props.handleCartDialogClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
        {props.currUser &&
          <List>
            {cartList?
              <>
              {cartList.map((marble) => (
                <>
                <ListItem button>
                  <Card className={classes.card}>
                    <CardMedia className={classes.card} image={marble.image}/>
                  </Card>
                  <ListItemText primary={marble.qualityName} secondary={marble.basicMaterial}/>
                  </ListItem>
                <Divider />
                </>
          ))}
            </>
            :
            <>
            <Typography variant="h3">No items in cart</Typography>
            </>
            }
            
            
            
         
        </List>
        }
        
      </Dialog>
    </div>
  );
}


export default MyCartDialog;