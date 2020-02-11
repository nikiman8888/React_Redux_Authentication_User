import React, { Component } from 'react';
import './Home.css';
import { checkAuthentication } from '../../redux/actions/index';
import { connect } from 'react-redux';

function Home() {
    return (
        <h1>Home Page</h1>
    )
}

export default Home;
