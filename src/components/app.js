import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header/index.jsx";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import View from "../routes/view";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <View path="/view/:movie" />
    </Router>
  </div>
);

export default App;
