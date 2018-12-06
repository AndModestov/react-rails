import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "src/routes";
import Menu from "src/components/menu";
import BasketContainer from "src/components/basket-container"

const App = () => (
  <BasketContainer>
    <Router basename="/app">
      <div className="container">
        <Menu />
        <Switch>
          {
            routes.map((route, index) => (
              <Route {...route} key={index} />
            ))
          }
        </Switch>
      </div>
    </Router>
  </BasketContainer>
);

export default App;
