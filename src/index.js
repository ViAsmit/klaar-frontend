import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBanksScreen from "./components/AllBanksScreen/AllBanksScreen";
import BankScreen from "./components/BankScreen/BankScreen";

const routing = (
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={AllBanksScreen} />
        <Route exact path="/banks/*" component={BankScreen} />
      </Switch>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
