// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        {/* <Route exact path="/" >
        </Route>
        <Route exact path="/signup" >
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
