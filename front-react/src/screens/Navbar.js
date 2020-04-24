import React from "react";
import {Link} from "react-router-dom";
import '../css/navbar.css';
import { disconnect } from '../store/actions/userActions';
import {connect} from 'react-redux';

function Navbar(props) {
    console.log(props);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {props.isLogin ?
                    <div>
                        <li>
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li>
                            <Link to="/listRequest">Requests</Link>
                        </li>
                        <div style={{float:"right"}}>
                            
                            <li className="logout" onClick={() => { props.disconnect(); }}><Link to="/">Logout</Link></li>
                        </div>
                    </div>
                    :
                    <div style={{ float: "right" }}>
                        <li>
                                <Link to="/login">Login</Link>
                            </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </div>
                }
            </ul>
        </nav>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        disconnect:() => {dispatch(disconnect());}
    };
};

export default connect(null, mapDispatchToProps)(Navbar);