import React from "react";
import {Link} from "react-router-dom";
import '../css/navbar.css';

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/request">Requests</Link>
                </li>
                <div style={{float:"right"}}>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li >
                    <Link to="#">Logout</Link>
                </li>
                </div>
            </ul>
        </nav>
    )
}