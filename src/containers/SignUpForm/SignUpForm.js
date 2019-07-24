import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStoreProperties } from '../../apiCalls';
import { setLoggedInUser } from '../../actions';
import CustomForm from '../../components/Shared/CustomForm'
import PropTypes from 'prop-types'
import './SignUpForm.css';

export class SignUpForm extends Component {
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
            password: this.state.password,
            isLoggedIn: true
        };
        let errorMessage = 'Error adding new user.'
        try {
            await fetchStoreProperties('http://localhost:3000/api/users/new', newUser, 'POST', errorMessage)
            let userLogin = { email: this.state.email, password: this.state.password }
            let user = await fetchStoreProperties('http://localhost:3000/api/users', userLogin, 'POST', errorMessage)
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
            <section className='signup-page'>
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
                        message: 'Error signing up'}
                    }   
                />
            </section>
        )
    }
}

SignUpForm.propTyps = {
  handleSubmit: PropTypes.func,
  setLoggedInUser: PropTypes.func
}

export const mapDispatchToProps = dispatch => ({
    setLoggedInUser: (user) => dispatch(setLoggedInUser(user)),
    handleSubmit: (bool) => dispatch(this.setState(bool))
})
export const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)