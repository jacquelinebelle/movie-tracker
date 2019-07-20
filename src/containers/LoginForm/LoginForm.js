import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchObject } from '../../apiCalls';
import { setLoggedInUser, getFavorites } from '../../actions';
import './LoginForm.scss';
import CustomForm from '../../components/Shared/CustomForm';

export class LoginForm extends Component {
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
        let options = { email: this.state.email, password: this.state.password };
        let errorMessage = 'Error logging in user.';
        try {
            let user = await fetchObject('http://localhost:3000/api/users', options, 'POST', errorMessage)
            this.props.setLoggedInUser(user.data)
            let res = await fetch(`http://localhost:3000/api/users/${user.data.id}/favorites`)
            let favorites = await res.json()
            await this.props.getFavorites(favorites.data)
            this.setState({ isLoggedIn: true })
            this.setState({ error: '' })
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
                <CustomForm
                    title={'Log Into Your Account :)'}
                    formFields={[
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
                        {
                            isError: this.state.error,
                            message: 'Email and password don\'t match'
                        }
                    }
                />
            </>
        )
    }
}

export const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export const mapDispatchToProps = dispatch => ({
    setLoggedInUser: user => dispatch(setLoggedInUser(user)),
    getFavorites: id => dispatch(getFavorites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)