import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //It's typical to wrap the app in a Router so that
    //we can have good page navigation

    //adding a path to a Route allows us to determine
    //the endpoint of the component

    //exact={true} tells Dashboard to only appear on
    // localhost/ and not on localhost/*

    //<Switch> will render the first component that is found
    //and not rendering the Error page on every Route
    <Router>
      <Switch>
        <PrivateRoute path="/" exact={true}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
