import React from "react";
import Home from "../screens/Home";
import Navbar from "../screens/Navbar";
import CalendarView from "../screens/Calendar";
import Login from '../screens/Login';
import FormRequest from '../components/FormRequest'
import RequestPage from '../screens/RequestPage';
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
                <Route path='/formRequest'>
                    <FormRequest />
                </Route>
                <Route path='/calendar'>
                    <CalendarView />
                </Route>
                <Route path='/request/:id' children={<RequestPage/>}>
                    <RequestPage/>
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