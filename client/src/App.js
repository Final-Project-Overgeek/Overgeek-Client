import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Game, Lecturer } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game/:game">
          <Game />
        </Route>
        <Route path="/lecturer/:name">
          <Lecturer />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
