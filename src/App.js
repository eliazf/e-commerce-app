import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components";

import { Home, Settings, Login, Cart } from "./pages";

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
