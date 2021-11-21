import { getCategories } from "../../actions/categories";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Stack,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import useStyles from "./styles";
import { styled } from "@mui/material/styles";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import Categories from "../../components/Categories/Categories";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import { useDispatch } from "react-redux";
import SearchInput from "../../components/Search/SearchInput";
import CustomDialog from "../../components/Dialog/CustomDialog";




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = (props) => {
  const classes = useStyles();
  const [viewState, setViewState] = useState("grid");
  const dispatch = useDispatch();

  const handleViewState = (view) => {
    setViewState(view);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [props.currUser, dispatch]);

  const categories = useSelector((state) => state.categories);

  return (
    <Grow in>
      <Container>
        <div>
          <Stack
            className={classes.stack}
            direction="row"
            justifyContent="end"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            {/* <div style={{justifyContent:"end"}}><SearchInput searchData={categories}/></div> */}

            <Button
              size="large"
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "10px",
                color: "rgba(0,0,0,0.7)",
              }}
            >
              <SearchIcon  style={{ color:"orange" }} /> Search...
            </Button>

            {viewState == "list" ? (
              <IconButton disabled>
                <ListIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleViewState("list")}>
                <ListIcon />
              </IconButton>
            )}
            {viewState == "grid" ? (
              <IconButton disabled>
                <GridViewIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleViewState("grid")}>
                <GridViewIcon />
              </IconButton>
            )}
          </Stack>
        </div>
        <Grid
          className={classes.adjustTop}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <Categories
              currUser={props.currUser}
              viewState={viewState}
              categories={categories}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
