import React, { Component } from 'react';
import { fetchNewUser } from '../../apiCalls';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        const postNewUser = await fetchNewUser('https://localhost:3000/api/users/new', newUser)
        // await this.setState(postNewUser)
        await console.log(postNewUser);
    }

    render() {
        return (
            <>
                <h2>Create An Account :)</h2>
                <form>
                    <label htmlFor="name-input">Name:</label>
                    <input type="text" placeholder="Name"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <label htmlFor="email-input">Email:</label>
                    <input type="text" placeholder="Email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    <label htmlFor="password-input">Password:</label>
                    <input type="text" placeholder="Password"
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}

export default SignUpForm;