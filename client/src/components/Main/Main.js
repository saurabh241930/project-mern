import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import RegisterClient from "../../Pages/Register/RegisterClient";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import useStyles from "./styles";
import PassPropsToChildComponents from "./PassPropsToChildComponents";
import { useSelector } from "react-redux";
import Map from "../../Pages/Map/Map";
import CategoryPage from "../../Pages/CategoryPage/CategoryPage";

const mapKeyToComponent = (key) => {
  switch (key) {
    case "categories":
      return <Home />;
    case "profile":
      return <Profile />;
    case "map":
      return <Map />;
    case "registerClient":
      return <RegisterClient />;
    case "category":
      return <CategoryPage/>
    default:
      return <Home />;
  }
};

const Main = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box} sx={{ flexGrow: 1 }}>
      <PassPropsToChildComponents currUser={props.currUser}>
        {mapKeyToComponent(props.childText)}
      </PassPropsToChildComponents>
    </Box>
  );
};

export default Main;
