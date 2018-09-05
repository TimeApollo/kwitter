import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {connect } from 'react-redux'
import { registerUser , clickedLoginLink } from './action'
import Navbar from "./navbar.jsx"

class RegisterUserForm extends React.Component{

  state = {
    displayName: "",
    username: "",
    password: "",
    passwordMatch: "",
    isPasswordMatch: true,
  }

  handleRegisterUser = () => {
    if (
      this.state.password === this.state.passwordMatch && 
      this.state.username &&
      this.state.displayName
    ) {
      this.setState({isPasswordMatch: true})
      this.props.registerUser(this.state.username, this.state.password, this.state.displayName )
      return
    } 
    if (this.state.password !== this.state.passwordMatch) {
      this.setState({isPasswordMatch: false})
    } else {
      this.setState({isPasswordMatch: true})
    }
  }

  handleChangeDisplayName = (event) => {
    this.setState({displayName: event.target.value})
  }
  handleChangeUsername = (event) => {
    this.setState({username: event.target.value})
  }

  handleChangePasswordMatch = (event) => {
    this.setState({passwordMatch: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleChangeDisplayName = (event) => {
    this.setState({displayName: event.target.value})
  }

  handleLoginRouteChange = () => {
    this.props.clickedLoginLink()
  }

  passwordMismatch = () => {
    return (
      <Segment raised>Passwords must match.</Segment>
    )
  }

  registerFail = () => {
    return (
      <Segment raised>Username is already taken. Please enter in a different Username.</Segment>
    )
  }

  render(){

    return (
    <div className='login-form'>  
    <style> {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    {/* <Navbar></Navbar> */}
    <Grid textAlign='center' style={{ height: '100%', verticalAlign:'flex-start', marginTop: "4em" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        { this.props.register.isRegisterFail ? this.registerFail() : null }
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Register a new account
        </Header>
        
        <Form size='large'>
          <Segment 
            stacked
            style={{
              border:"2px solid", 
              borderColor: "rgb(65, 118, 115)",
              }}
          >

            <Form.Input
              fluid
              required
              value={this.state.displayName}
              icon='user'
              iconPosition='left'
              placeholder='Name'
              type="displayName"
              onChange={this.handleChangeDisplayName}
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
            />

            <Form.Input 
              fluid 
              required
              value={this.state.username}
              icon='user'
              iconPosition='left' 
              placeholder='Username' 
              type="username"
              onChange={this.handleChangeUsername}
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
            />
            { this.state.isPasswordMatch ? null : this.passwordMismatch() }
            <Form.Input
              fluid
              required
              value={this.state.password}
              icon='lock'
              iconPosition='left'
              placeholder='Create a password'
              type='password'
              onChange={this.handleChangePassword}
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
            />

            <Form.Input
              fluid
              required
              value={this.state.passwordMatch}
              icon='lock'
              iconPosition='left'
              placeholder='Re-enter Password'
              type='password'
              match="password"
              onChange={this.handleChangePasswordMatch}
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
            />
            <Button
              color='teal' 
              fluid 
              size='large'
              onClick={this.handleRegisterUser}>
              Register User
            </Button>
          </Segment>
        </Form>
        <Message 
          style={{
          border:"1.2px solid", 
          borderColor: "rgb(65, 118, 115)",
          }}>
          Already a member? 
          <Link
          style={{
            color: "rgb(65, 118, 115)",
            fontWeight: "bold"
          }} 
          to='/' onClick={this.handleLoginRouteChange}> Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

const mapStateToProps = ({register}) => ({
  register
});


//only need to map async props here
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, displayName) => {
      dispatch(registerUser(username, password, displayName))
    },
    clickedLoginLink: () => {
      dispatch(clickedLoginLink())
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(RegisterUserForm)