// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
