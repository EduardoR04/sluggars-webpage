import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        {/* Header component is used various times so putting it outside of the switch will enable it in everythin */}
        <Header />
        <Switch>
          <Route path="/checkout">
            {/* Press Ctrl + Spacebar at the end of component name to automatically import component */}
            <Checkout />
          </Route>
          {/* Default Route make sure it is at the bottom or else it wont get triggered */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
