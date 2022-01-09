import React from "react";
import { Dashboard, Login, Error } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //It's typical to wrap the app in a Router so that
    //we can have good page navigation

    //adding a path to a Route allows us to determine
    //the endpoint of the component

    //exact={true} tells Dashboard to only appear on
    // localhost/ and not on localhost/*
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
