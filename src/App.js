import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import Layout from "./components/layout/layout.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
