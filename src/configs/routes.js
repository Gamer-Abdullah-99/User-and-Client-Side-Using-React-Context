import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/navbar";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Studenthome from "../screens/studentHome";
import Teacherhome from "../screens/teacherHome";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Signup />   
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
