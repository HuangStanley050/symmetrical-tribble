import React, { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { store } from "../store/store";

const Login = props => {
  const responseGoogle = res => console.log(res.accessToken);
  const loginPageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh"
  };
  return (
    <div style={loginPageStyle}>
      <GoogleLogin
        clientId={process.env.REACT_APP_API_KEY}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
