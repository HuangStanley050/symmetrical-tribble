import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { store } from "../store/store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const globalState = useContext(store);
  const { isAuth } = globalState.state;
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
