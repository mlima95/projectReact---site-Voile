import React, { Component } from 'react'
import { createRessource } from '../services/api_services'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            Email: "",
            Password: "",
            Firstname: "",
            Lastname: "",
            Birthday: "",
            Number: "",
            Gender: "",

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const user = {
            Firstname: this.state.Firstname,
            Lastname: this.state.Lastname,
            Birthday: this.state.Birthday,
            Number: this.state.Number,
            Email: this.state.Email,
            Password: this.state.Password,
            Gender: this.state.Gender
        }
        createRessource("register", user).then(res => {
            window.location = "/login";
        })
    }
    render() {
        return (
            <div className="row" style={{ flexDirection: "column" }}>
            <div className="cardDescription" >
                    <form noValidate onSubmit={this.onSubmit} style={{
                            display: "flex", flexDirection: "column",
                            alignSelf: "center",marginLeft:"20px",marginRight:"20px"
                        }}>
                        <label>Gender</label>
                        {/* <input type="radio" id="Gender" name="Gender" value="male" label="male" checked={this.state.Gender === 'male'} onChange={this.onChange} ></input>
                        <input type="radio" id="Gender" name="Gender" value="female" label="female" checked={this.state.Gender === 'female'} onChange={this.onChange}></input> */}
                        <select className="inputLogin" name="Gender" value={this.state.Gender ? this.state.Gender:"undefined"} onChange={this.onChange}>
                    <option value="">--Please choose an option--</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>
                        <label>Firstname</label>
                        <input className="inputLogin" type="text" name="Firstname" placeholder="Enter firstname" value={this.state.Firstname} onChange={this.onChange}></input>
                        <label>Lastname</label>
                        <input className="inputLogin" type="text" name="Lastname" placeholder="Enter lastname" value={this.state.Lastname} onChange={this.onChange}></input>
                        <label>Number</label>
                        <input className="inputLogin" type="text" name="Number" placeholder="Enter number" value={this.state.Number} onChange={this.onChange}></input>
                        <label>Birthday</label>
                        <input className="inputLogin" type="Date" name="Birthday" value={this.state.Birthday} onChange={this.onChange}></input>
                        <label>Email</label>
                        <input className="inputLogin" type="email" name="Email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}></input>
                        <label>Password</label>
                        <input className="inputLogin" type="password" name="Password" placeholder="Enter password" value={this.state.Password} onChange={this.onChange}></input>
                        <button className="btnLogin" type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        )

    }
}
export default Register