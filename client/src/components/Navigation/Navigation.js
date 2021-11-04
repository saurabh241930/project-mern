import Main from '../Main/Main'
import { Route, Switch } from "react-router-dom";
import React from "react";
import PassPropsToRouteComponents from './PassPropsToRouteComponents'



const Navigation = () => {

    return (
        <>
          <Switch>
            
                <Route
                    exact
                    from="/"
                    render={(props) => {
                    return <Main childText="categories" {...props} />;
                    }}
                />
                <Route
                    exact
                    from="/map"
                    render={(props) => {
                    return <Main childText="map" {...props} />;
                    }}
                />
                <Route
                    exact
                    path="/auth"
                    render={(props) => <Main childText="auth" {...props} />}
                />
                <Route
                    exact
                    path="/register-client"
                    render={(props) => <Main childText="registerClient" {...props} />}
                />
      </Switch>  
        </>
    )
}

export default Navigation
