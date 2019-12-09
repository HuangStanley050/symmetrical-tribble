import React from "react";
import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";
import { GoogleLogin } from "react-google-login";
import { Switch, Route } from "react-router-dom";
import TriviaPage from "./components/Trivia";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/trivia" component={TriviaPage} />
      </Switch>
    </main>
  );
}

export default App;

/*
const responseGoogle = res => console.log(res.accessToken);
return (
  <GoogleLogin
    clientId={process.env.REACT_APP_API_KEY}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />
);
 */
