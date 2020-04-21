import React, {Component} from 'react'
import { login } from '../services/api_services'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            Email: "",
            Password: "",

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const user = {
            Email: this.state.Email,
            Password: this.state.Password
        }
        login(user).then(res => {
            if(res){
                window.location= "/profile";
            }
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                  <form noValidate onSubmit={this.onSubmit}>
                      <input type="email" name="Email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}></input>
                      <input type="password" name="Password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}></input>
                     <button type ="submit">Sign in</button>
                  </form>
                </div>
            </div>
        )

    }
}
export default Login