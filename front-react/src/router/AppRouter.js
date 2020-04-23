import React from "react";
import Home from "../screens/Home";
import Navbar from "../screens/Navbar";
import Calendar from "../screens/Calendar";
import Login from '../screens/Login';
import Request from '../screens/Request';
import Register from '../screens/Register';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter(props) {

    return (
        <Router>
            <Navbar isLogin={props.user!==null}/>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/request'>
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
const mapStateToProps = state => {
    console.log(state.user.data)
    return {
        user: state.user.data 
    }
  };
  
  export default connect(mapStateToProps)(AppRouter);