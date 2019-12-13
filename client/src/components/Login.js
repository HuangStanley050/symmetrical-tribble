import React, { useContext, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { store } from "../store/store";
import * as actionType from "../store/actionTypes";
import { loginOkay, loginFail } from "../store/actions";
import { Redirect } from "react-router-dom";

const Login = props => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const { isAuth } = globalState.state;
  const googleLoginFail = res => {
    //console.log(res);
    dispatch(loginFail());
  };
  const googleLoginOkay = res => {
    dispatch(loginOkay());
    //console.log(res.accessToken);
  };
  const loginPageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh"
  };
  if (isAuth) {
    return <Redirect to="/trivia" />;
  }
  return (
    <div style={loginPageStyle}>
      <GoogleLogin
        clientId={process.env.REACT_APP_API_KEY}
        buttonText="Login with your google email"
        onSuccess={googleLoginOkay}
        onFailure={googleLoginFail}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
