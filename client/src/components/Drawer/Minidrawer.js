import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { withRouter, Link, useHistory, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import CustomDialog from "../Dialog/CustomDialog";
import AuthDialog from "../Dialog/AuthDialog";
import { useDispatch } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { LOGOUT } from "../../constants/actionTypes";
import MapIcon from "@mui/icons-material/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import { signout } from "../../actions/auth";
import { set } from "date-fns";
import { ClassNames } from "@emotion/react";
import useStyles from "./styles";
import MyCartDialog from "../Dialog/MyCartDialog";
import { myCart } from "../../actions/cart";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#f2f2f2",
  color: "black",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "black",
  color: "#f2f2f2",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "black",
  color: "black",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    backgroundColor: "white",
    color: "white",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Minidrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const currUser = props.currUser;

  const dispatch = useDispatch();
  const { history } = props;

  const [open, setOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [dialogOpen, setDialogueOpen] = React.useState(false);
  React.useEffect(() => {
    setDialogueOpen(dialogOpen);
  }, [dialogOpen]);

  const cart = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(myCart());
  }, [dispatch, cartOpen]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogueOpen(true);
  };
  const handleDialogClose = () => {
    setDialogueOpen(false);
  };

  const handleCartDialogOpen = () => {
    setCartOpen(true);
    dispatch(myCart);
  };

  const handleCartDialogClose = () => {
    setCartOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  const itemsList = [
    {
      text: "Categories",
      icon: (
        <ViewListIcon
          style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }}
        />
      ),
      onClick: () => history.push("/"),
    },
    {
      text: "Map",
      icon: (
        <MapIcon style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }} />
      ),
      onClick: () => history.push("/map"),
    },
    {
      text: "My Cart",
      icon: (
        <ShoppingCartIcon
          style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }}
        />
      ),
      onClick: () => history.push("/auth"),
    },
    {
      text: "Filter",
      icon: (
        <EditIcon style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }} />
      ),
      onClick: () => history.push("/auth"),
    },
    {
      text: "Register Client",
      icon: (
        <GroupAddIcon
          style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }}
        />
      ),
      onClick: () => history.push("/register-client"),
    },
    {
      text: "Need Help",
      icon: (
        <HelpIcon style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }} />
      ),
      onClick: () => history.push("/help"),
    },
    {
      text: currUser ? "logout" : "login",
      icon: currUser ? (
        <PersonIcon
          style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }}
        />
      ) : (
        <LogoutIcon
          style={open ? { color: "#6B6B6B" } : { color: "#f2f2f2" }}
        />
      ),
      onClick: () => (currUser ? handleLogout() : handleDialogOpen()),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar className={classes.appBar} position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon style={{ color: "orange" }} />
          </IconButton>
          <img sx={{justifySelf:'center'}} src="https://i.imgur.com/7Wyhc1V.jpg" height="30" />
          {currUser && (
            <>
              <Badge badgeContent={cart.cart?.cartList.length} color="error">
                <IconButton onClick={handleCartDialogOpen} color="inherit">
                  <ShoppingCartIcon style={{ color: "orange" }} />
                </IconButton>
              </Badge>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <AuthDialog
        dilaogOpenProp={dialogOpen}
        historyProp={history}
        handleDialogCloseProp={handleDialogClose}
      />
      
      {currUser && (
        <MyCartDialog
          openProp={cartOpen}
          handleCartDialogClose={handleCartDialogClose}
          cartList={cart.cart?.cartList}
          currUser={currUser}
        />
      )}
    </Box>
  );
};

export default withRouter(Minidrawer);
