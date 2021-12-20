import { AppStateProvider } from "./store";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./teleporthq/style.module.css";
import Home from "./teleporthq/pages/home";

// comm 1
const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route exact component={Home} path="/" />
      </AppStateProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
