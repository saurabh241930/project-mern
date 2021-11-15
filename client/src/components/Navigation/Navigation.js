import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";
import React from "react";
import PassPropsToRouteComponents from "./PassPropsToRouteComponents";
import { useLocation } from "react-router-dom";

const Navigation = (props) => {
  const currUser = props.currUser;

  return (
    <>
      <Switch>
        <Route
          exact
          from="/"
          render={(props) => {
            return (
              <Main childText="categories" currUser={currUser} {...props} />
            );
          }}
        />
        <Route
          exact
          from="/map"
          render={(props) => {
            return <Main childText="map" currUser={currUser} {...props} />;
          }}
        />
        <Route
          exact
          path="/auth"
          render={(props) => (
            <Main currUser={currUser} childText="auth" {...props} />
          )}
        />
        <Route
          exact
          path="/register-client"
          render={(props) => (
            <Main currUser={currUser} childText="registerClient" {...props} />
          )}
        />
        <Route
          exact
          path="/category"
          render={(props) => (
            <Main currUser={currUser} childText="category" {...props} />
          )}
        />
      </Switch>
    </>
  );
};

export default Navigation;
