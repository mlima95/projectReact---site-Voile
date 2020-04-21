import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            Firstname: "",
            Lastname: "",
            Email: "",
            Birthday: "",
            Number: ""
        }
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            Firstname: decoded.Firstname,
            Lastname: decoded.Lastname,
            Email: decoded.Email,
            Birthday: decoded.Birthday,
            Number: decoded.Number
        })
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center">PROFILE</h1>
                <table className="table">
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.Firstname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.Lastname}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{this.state.Number}</td>
                    </tr>
                    <tr>
                        <td>Birthday</td>
                        <td>{this.state.Birthday}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{this.state.Email}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Profile