import React from "react";
import logo from "./logo.svg";
import "semantic-ui-css/semantic.min.css";

import { Switch, Route } from "react-router-dom";
import TriviaPage from "./components/Trivia";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/trivia" component={TriviaPage} />
      </Switch>
    </main>
  );
}

export default App;
