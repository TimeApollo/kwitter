import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect } from 'react-redux'
import './App.css';
import { registerUser , registerComplete } from './action'

class App extends Component {
  render() {
    return (
      <p>We Have Begun {this.props.registerUser('TimeApollo','TimeApollo','TimeApollo')}</p>
      
    );
  }
}

const mapStateToProps = (state) => ({
  auth: {
    token: state.auth.token,
    success: state.auth.success
  },
  messages: state.messages,
  user:state.user,
  isRegisterSuccess: state.isRegisterSuccess
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerComplete: (userName, displayName) => {
      dispatch(registerComplete(userName, displayName))
    },
    registerUser: (username, password, displayName) => {
      dispatch(registerUser(username, password, displayName))
    }
  }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));
