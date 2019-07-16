import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../apiCalls';
import { setLoggedInUser } from '../../actions';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            error: '',
            user: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let options = { email: this.state.email, password: this.state.password }
        try {
            let user = await userLogin('http://localhost:3000/api/users', options)
            this.props.setLoggedInUser(user.data)
            this.setState({ isLoggedIn: true })
            this.setState({error: ''})
        } catch (error) {
            this.setState({ error: error.message })
        }
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            email: '',
            password: ''
        })
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
                {this.state.error && <h2>Email and Password do not match</h2>}
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    handleSubmit: () => dispatch(this.setState(this.state.isLoggedIn)),
    setLoggedInUser: (user) => dispatch(setLoggedInUser(user))
})
const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)