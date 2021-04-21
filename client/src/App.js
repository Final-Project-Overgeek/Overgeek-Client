import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, SignUp, Game, Lecturer, Payments } from "./pages";
import { GuardProvider, GuardedRoute } from "react-router-guards";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.access_token) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

const App = () => {
  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <Route path="/game/:game">
            <Game />
          </Route>
          <Route path="/lecturer/:id">
            <Lecturer />
          </Route>
          <GuardedRoute
            path="/payments"
            exact
            component={Payments}
            meta={{ auth: true }}
          />
          {/* <Route path="/payments">
          <Payments />
        </Route> */}
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
      </GuardProvider>
    </Router>
  );
};

export default App;
