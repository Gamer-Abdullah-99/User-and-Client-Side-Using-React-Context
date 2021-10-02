import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/navbar";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Addstudents from "../screens/teacherSide/addStudents";
import StudentsTable from "../screens/teacherSide/studentsTable";

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
          <Route path="/addstud">
            <Addstudents />
          </Route>
          <Route path="/studtable">
            <StudentsTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
