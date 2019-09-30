import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MultipleItems from "./MultipleItems";
import SingleItem from "./SingleItem";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MultipleItems} />
          <Route exact path="/dog/:id" component={SingleItem}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
