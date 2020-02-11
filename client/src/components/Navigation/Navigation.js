import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/index';
import { connect } from 'react-redux';
//import { loginSuccess } from '../../redux/actions/index';

class Navigation extends Component {

    handleClick = event => {
        event.preventDefault()
        // Remove the token from localStorage
        localStorage.removeItem("token")
        // Remove the user object from the Redux store
        this.props.logoutUser()
    }
    render() {
        let { isLogged, currentUser } = this.props; 
        return (
            <div className='navigation'>
                <Link to='/'>Home</Link>
                {!isLogged && <Link to='/register'>Register</Link>}
                {!isLogged && <Link to='/login'>Login</Link>}
                {isLogged && <Link to='/' onClick={this.handleClick}>Logout</Link>}
                {isLogged && <Link>Welcome {currentUser}</Link>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),

})
export default connect(null, mapDispatchToProps)(Navigation);
