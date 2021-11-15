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

import Categories from "../../components/Categories/Categories";
import CustomSnackbar from "../../components/Snackbar/CustomSnackbar";
import { useDispatch } from "react-redux";

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
            <Categories currUser={props.currUser} viewState={viewState} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
