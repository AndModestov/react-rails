import React from "react";
import { Router, Route, Switch, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import history from "src/helpers/history";

import routes from "src/routes";
import Menu from "src/components/menu";
import store from "src/store";

function historyCallback(location) {
  routes
    .filter((route) => route.prepareData)
    .filter((route) => matchPath(location.pathname, route))
    .map((route) => route.prepareData(store));
}

history.listen(historyCallback);
historyCallback(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
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
