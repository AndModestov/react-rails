import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "src/routes";
import Menu from "src/components/menu";
import store from "src/store";

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
