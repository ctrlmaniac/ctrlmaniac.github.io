import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "src/Components";

// Routes
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Formazione } from "./Formazione";

export default function App(props) {
  return (
    <BrowserRouter basename="/me">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/formazione" component={Formazione} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
