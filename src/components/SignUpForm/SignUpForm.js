import React, { Component } from 'react';
import { fetchNewUser } from '../../apiCalls';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            error: ''
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
        try {
          const postNewUser = await fetchNewUser('http://localhost:3000/api/users/new', newUser)
          this.setState({error: ''})
        } catch(error) {
          this.setState({error: error.message})
        }
        this.clearInputs()
    }
    clearInputs = () => {
      this.setState({
        name: '',
        email: '',
        password: ''
      })
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
            {this.state.error && <h2>{this.state.error}</h2>}
            </>
        )
    }
}

export default SignUpForm;