// import * as React from "react";
// import useStyles from "./marbleDialogStyles.js";
// import {
//   CssBaseline,
//   Button,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Dialog,
//   Box,
//   Grid,
//   Typography,
// } from "@mui/material";
// import Input from "@mui/material/Input";
// import DataTable from "../DataTable/DataTable.js";
// import { useSelector, useDispatch } from "react-redux";
// import { cartAction, myCart } from "../../actions/cart.js";
// import CategoryList from "../Categories/Category/CategoryList.js";

// const ariaLabel = { "aria-label": "description" };

// const CategoryDialog = (props) => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const currUser = props.currUser;
//   const isLoggedIn = !(currUser == null);

//   console.log(props);

//   React.useEffect(() => {
//     dispatch(myCart());
//   }, [dispatch]);

//   const handleAddToCart = (marbleId) => {
//     dispatch(cartAction(marbleId));
//   };

//   return (
//     <>
//       <CssBaseline />
//       {props?.showMarbleOnDialog && (
//         <Dialog
//           fullWidth={true}
//           open={true}
//           maxWidth="md"
//           sx={{
//             backdropFilter: "blur(1px)",
//           }}
//         >
//           <DialogTitle className={classes.title}>
//             <span className={classes.basicMaterial}>
//               {props.showCategoryMarbleOnDialog.basicMaterial}
//             </span>
//           </DialogTitle>
//           <DialogContent>
//             <Grid container spacing={2}>
//               <Grid item sm={5} xs={5}>
//                 <img
//                   className={classes.marbleImage}
//                   src={props.showMarbleOnDialog.image}
//                 />
//               </Grid>
//               <Grid item sm={7} xs={7}>
//                 <Typography variant="h5">
//                   <span className={classes.label}>Quality Name : </span>{" "}
//                   {props.showMarbleOnDialog.qualityName}
//                 </Typography>
//                 <br />
//                 <Typography variant="h8">
//                   <span className={classes.label}>Description : </span>{" "}
//                   {props.showMarbleOnDialog.description}
//                 </Typography>
//                 <br />
//                 <Typography variant="h8">
//                   <span className={classes.label}>Block Batch No : </span>{" "}
//                   {props.showMarbleOnDialog.blockBatchNo}
//                 </Typography>
//                 <br />
//                 <Typography variant="h8">
//                   <span className={classes.label}>Color : </span>{" "}
//                   {props.showMarbleOnDialog.color}
//                 </Typography>
//                 <br />
//                 <Typography variant="h8">
//                   <span className={classes.label}>Material : </span>{" "}
//                   {props.showMarbleOnDialog.material}
//                 </Typography>
//                 <br />
//                 <br />
//                 <Grid container spacing={2}>
//                   <Grid item sm={6} xs={6}>
//                     {isLoggedIn ? (
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         onClick={() =>
//                           handleAddToCart(props.showMarbleOnDialog.marbleId)
//                         }
//                       >
//                         Add to Cart
//                       </Button>
//                     ) : (
//                       <Button variant="contained" fullWidth disabled>
//                         Add to Cart
//                       </Button>
//                     )}
//                   </Grid>
//                   <Grid item sm={6} xs={6}>
//                     <Button variant="outlined" fullWidth>
//                       Add to Favourites
//                     </Button>
//                   </Grid>
//                   <Grid item sm={12} xs={12}>
//                     <DataTable />
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={props.onDialogClose}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       )}
//       <Box
//         sx={{
//           minHeight: "100vh",
//           background:
//             "url(https://source.unsplash.com/random) no-repeat center center",
//           backgroundSize: "cover",
//         }}
//       ></Box>
//     </>
//   );
// };

// export default CategoryDialog;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Card, CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Grid } from "@mui/material";
import useStyles from './CategoryDialog.styles'
import MarblesList from "../Marbles/MarblesList";
import { useSelector } from "react-redux";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CategoryDialog = (props) => {
  const classes = useStyles(props);
  const marbles = useSelector((state) => state.marbles);


  return (
    <div>
      <Dialog
        fullScreen
        open={props.dilaogOpenProp}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.AppBar} style={{backgroundImage:`url("${props.showCategoryMarbleOnDialog?.image}")`}} >
          <Toolbar>
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={props.onDialogClose}
            >
              <CloseIcon />
            </IconButton> */}
            <Typography
              
              sx={{ ml: 2, flex: 1 }}
              variant="h2"
              component="div"
            >
              <span className={classes.Text}>{props.showCategoryMarbleOnDialog?.qualityName}</span>
              
            </Typography>
            <Button
              autoFocus
              color="primary"
              variant='contained'
              size="small"
              onClick={props.onDialogClose}
            >
              close
            </Button>
          </Toolbar>
        </AppBar>
        <Grid className={classes.marblesList} container alignItems="stretch">
          <Grid item  xs={12} sm={12} md={12}>
              <MarblesList dataToRender={marbles}/>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default CategoryDialog;
