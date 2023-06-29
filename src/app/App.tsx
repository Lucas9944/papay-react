// import { Container } from "@mui/material";
import React from "react";
import "../css/App.css";
import Dishes from "./components/dishes";
import Users from "./components/users";
// import { RippleBadge } from "./MaterialTheme/styled";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/system";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dishes">Dishes</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Container>
              <Home />
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}
