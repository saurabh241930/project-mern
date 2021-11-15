import React from "react";
import Minidrawer from "./components/Drawer/Minidrawer";
import Navigation from "./components/Navigation/Navigation";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Main from "./components/Main/Main";
import PassPropsToNormalComponents from "./components/Main/PassPropsToChildComponents";
import { useLocation } from "react-router";
import { setCurrentUser } from "./actions/auth";
import { set } from "date-fns";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "./redux/store";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  // const dispatch = useDispatch();
  // const location = useLocation();

  // React.useEffect(() => {
  //   const localUserData = JSON.parse(localStorage.getItem('profile'))
  //   dispatch(setCurrentUser(localUserData))
  //   console.log(JSON.parse(localStorage.getItem('profile')));
  // },[])

  const user = useSelector((state) => state.auth);
  const currUser = user?.authData?.result;
  const classes = useStyles();
  return (
    <Box sx={{ display: "flex" }}>
      <PassPropsToNormalComponents currUser={currUser}>
        <Minidrawer />
        <Navigation />
      </PassPropsToNormalComponents>
    </Box>
  );
}
