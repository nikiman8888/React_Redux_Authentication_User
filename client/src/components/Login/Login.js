import React, { Component } from 'react';
import './Login.css';
import { userLoginFetch } from '../../redux/actions/index.js';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userLoginFetch(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor='username'>Username</label>
                    <input
                        type='username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value = 'Login'/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);