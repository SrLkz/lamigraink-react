import React from "react";

import StyleSheet from "./Components/StylesApp";
import Navigation from "./Navigation";
import Home from "./Components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path="/Home" component={Home} />
        </Switch>
      
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
