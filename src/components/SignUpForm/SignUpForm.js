import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux';
import { fetchNewUser } from '../../apiCalls';
import { userLogin } from '../../apiCalls';
import { setLoggedInUser } from '../../actions';
import CustomForm from '../Shared/CustomForm'
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            isLoggedIn: false,
            error: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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
            let options = { email: this.state.email, password: this.state.password }
            let user = await userLogin('http://localhost:3000/api/users', options)
            this.props.setLoggedInUser(user.data)
            this.setState({ isLoggedIn: true })
            this.setState({ error: '' })
        } catch (error) {
            this.setState({ error: error.message })
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
                <CustomForm 
                    title={'Create an Account :)'}
                    formFields={[
                        {
                            type: 'name',
                            value: this.state.name,
                            onChange: this.handleChange,
                        },
                        {
                            type: 'email',
                            value: this.state.email,
                            onChange: this.handleChange,
                        },
                        {
                            type: 'password',
                            value: this.state.password,
                            onChange: this.handleChange
                        }
                    ]}
                    onSubmit={this.handleSubmit}
                    isLoggedIn={this.state.isLoggedIn}
                    error={
                        {isError: this.state.error,
                        message: 'Email and password don\'t match'}
                    }   
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)