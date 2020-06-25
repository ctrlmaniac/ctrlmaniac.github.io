import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "src/Components";

// Routes
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Formazione } from "./Formazione";

export default function App(props) {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/formazione" component={Formazione} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}
