import React, { Component } from 'react';
import './Register.css';
import { userRegisterFetch } from '../../redux/actions/index.js';
import { connect } from 'react-redux';

class Register extends Component {
    state = {
        username: '',
        password: '',
        repeatPassword: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userRegisterFetch(this.state);
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className='register'>
                <h1>Register page</h1>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor='username'>Username</label>
                    <input
                        type='username'
                        name='username'
                        
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        
                        onChange={this.handleChange}
                    />
                    <label htmlFor='repeatPassword'>Re-Password</label>
                    <input
                        type='password'
                        name='repeatPassword'
                        onChange={this.handleChange}
                    />
                    <input type='submit' value = 'Register'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userRegisterFetch: userInfo => dispatch(userRegisterFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Register);