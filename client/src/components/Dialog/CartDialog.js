import * as React from 'react';
import useStyles from './marbleDialogStyles.js';
import {CssBaseline,Button,DialogActions,DialogContent,DialogTitle,Dialog,Box,Grid,Typography} from '@mui/material';
import Input from '@mui/material/Input';
import DataTable from '../DataTable/DataTable.js'
import { useSelector,useDispatch } from 'react-redux';
import { cartAction, } from '../../actions/cart.js';

const ariaLabel = { 'aria-label': 'description' };



const CartDialog = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currUser = props.currUser;
    const isLoggedIn = !(currUser == null)

    const handleAddToCart = (marbleId) => {
      console.log("cc");
      dispatch(cartAction(marbleId))
    }

    console.log(props.showMarbleOnDialog);
  

    

  return (
    <>
      <CssBaseline />
      {props?.showMarbleOnDialog &&
      <Dialog
        fullWidth={true}
        open={props.dilaogOpenProp}
        maxWidth="md"
        sx={{
          backdropFilter: "blur(1px)",
        }}
      >
        
        <DialogTitle className={classes.title}><span className={classes.basicMaterial}>{props.showMarbleOnDialog.basicMaterial}</span></DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item sm={5} xs={5}>
                    <img className={classes.marbleImage} src={props.showMarbleOnDialog.image}/>
                </Grid>
                <Grid item sm={7} xs={7}>
                    <Typography variant='h5'><span className={classes.label}>Quality Name : </span> {props.showMarbleOnDialog.qualityName}</Typography><br/>
                    <Typography variant='h8'><span className={classes.label}>Description : </span> {props.showMarbleOnDialog.description}</Typography><br/>
                    <Typography variant='h8'><span className={classes.label}>Block Batch No : </span> {props.showMarbleOnDialog.blockBatchNo}</Typography><br/>
                    <Typography variant='h8'><span className={classes.label}>Color : </span> {props.showMarbleOnDialog.color}</Typography><br/>
                    <Typography variant='h8'><span className={classes.label}>Material : </span> {props.showMarbleOnDialog.material}</Typography><br/><br/>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xs={6}>
                          {isLoggedIn?
                           <Button variant="contained" fullWidth onClick={() => handleAddToCart(props.showMarbleOnDialog.marbleId)}>Add to Cart</Button>
                           :
                           <Button variant="contained" fullWidth disabled>Add to Cart</Button>
                          }
                            
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <Button variant="outlined"  fullWidth>Add to Favourites</Button>
                        </Grid>
                        <Grid item sm={12} xs={12}>
                            <DataTable/>
                        </Grid>
                    </Grid>
                    
                    
                </Grid>
            </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.onDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    }
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


export default CartDialog;