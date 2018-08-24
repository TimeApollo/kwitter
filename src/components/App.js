import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect } from 'react-redux'
import './App.css';
import { registerUser , registerComplete } from './action'
import LoginForm from "./login.jsx"
// import EditProfileForm from "./editProfile.jsx"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginForm>{this.props.registerUser('TimeApollo','TimeApollo','TimeApollo')}</LoginForm>
      </React.Fragment>
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
