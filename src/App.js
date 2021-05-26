import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navigation/Navbar";
import Calc from "./components/Calc/Calc";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Layout} />
          <Route path="/calc" component={Calc} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
