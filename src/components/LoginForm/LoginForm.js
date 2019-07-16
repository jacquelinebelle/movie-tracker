import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ isLoggedIn: true })
        // something to validate password
    }

    render() {
        return (
            <>
                <h2>Log Into Your Account :)</h2>
                <form>
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

const mapDispatchToProps = dispatch => ( {
    handleSubmit: () => dispatch( this.setState(this.state.isLoggedIn) )
  } )
  const mapStateToProps = ( state ) => ( {
    isLoggedIn: state.isLoggedIn
  } )
export default connect( mapStateToProps, mapDispatchToProps )( LoginForm )