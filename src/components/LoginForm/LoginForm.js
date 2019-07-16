import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form>
                <label HTMLfor="name-input">Name:</label>
                <input type="text" placeholder="Name"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange} />
                <label HTMLfor="email-input">Email:</label>
                <input type="text" placeholder="Email"
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange} />
                <label HTMLfor="password-input">Password:</label>
                <input type="text" placeholder="Password"
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        )
    }
}

export default LoginForm;