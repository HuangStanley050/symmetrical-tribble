import React from "react";
import logo from "./logo.svg";
import { GoogleLogin } from "react-google-login";

function App() {
  const responseGoogle = res => console.log(res);
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_API_KEY}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
