import React from 'react';
import { connect } from 'react-redux';
import { onConnect } from '../store/actions/userActions';
import { login } from '../services/api_services';

const crypto = require("crypto");

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = { email: "", password: "" }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    encodedPassword() {
        return crypto.createHash("sha512").update(this.state.password.trim()).digest("base64");
    }

    connect(e) {
        e.preventDefault();
        let postData = { email: this.state.email, password: this.encodedPassword() };
        login(postData).then(result => {
            this.props.onConnect(result.response);
            window.location = "/home";
        });
    }

    render() {
        return (
            <div className="row" style={{ flexDirection: "column" }}>
                <div className="cardDescription" style={{padding:"0px"}}>
                    <div style={{ textAlign: "center", padding: "10px" }}>
                    <h3>Veuillez vous connecter</h3>
                        <form style={{
                            display: "flex", flexDirection: "column",
                            alignSelf: "center", marginBottom: "20px"
                        }}>
                            <input className="inputLogin" type="email"
                                name="email"
                                value={this.state.email}
                                placeholder="email"
                                onChange={this.onChange.bind(this)} />
                            <input className="inputLogin" type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.onChange.bind(this)} />
                            <button className="btnLogin" onClick={this.connect.bind(this)}>
                                Login
                </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onConnect: data => { dispatch(onConnect(data.user, data.token)); }
    };
};
export default connect(null, mapDispatchToProps)(Login);
