import React from "react";
import { Switch, Route } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

import { Header, Footer } from "./components";

import { Home, Settings, Login, Cart, Account, ItemDetails } from "./pages";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <main>
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
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
