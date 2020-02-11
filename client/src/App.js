import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import './App.css';
import { checkAuthentication } from './redux/actions/index';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


class App extends Component {

  componentDidMount() {
    this.props.checkAuthentication()
  }

  render() {
    let { isLogged ,currentUser} = this.props;
 
    return (
      <BrowserRouter>
        <Navigation  isLogged={isLogged} currentUser = {currentUser}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  checkAuthentication: () => dispatch(checkAuthentication()),
  
})

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  isLogged: state.isLogged

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
