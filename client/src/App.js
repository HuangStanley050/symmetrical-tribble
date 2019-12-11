import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";
import TriviaPage from "./components/Trivia";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/trivia" component={TriviaPage} />
      </Switch>
    </main>
  );
}

export default App;
