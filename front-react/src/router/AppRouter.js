import React from "react";
import Home from "../screens/Home";
import Navbar from "../screens/Navbar";
import Calendar from "../screens/Calendar";
import Login from '../screens/Login';
import Request from '../screens/Request';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function AppRouter(props) {

    return (
        <Router>
            <Navbar></Navbar>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/listRequest'>
                    <Request />
                </Route>
                <Route path='/calendar'>
                    <Calendar />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}