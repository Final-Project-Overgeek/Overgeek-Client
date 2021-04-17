import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Game, Lecturer, Payments } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game/:game">
          <Game />
        </Route>
        <Route path="/lecturer/:id">
          <Lecturer />
        </Route>
        <Route path="/payments">
          <Payments />
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
