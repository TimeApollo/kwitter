import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { registerUser } from './action'
import Navbar from "./navbar.jsx"

class RegisterUserForm extends React.Component{

  state = {
    displayName: "",
    username: "",
    password: ""
  }

  handleRegisterUser = () => {
    this.props.registerUser(this.state.username, this.state.password, this.state.displayName, this )
  }

  handleChangeUsername = (event) => {
    this.setState({username: event.target.value})
  }

  handleChangePasswordMatch = (event) => {
    this.setState({passwordMatch: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
    // if (this.state.password === this.state.passwordMatch) {
    // }
  }

  handleChangeDisplayName = (event) => {
    this.setState({displayName: event.target.value})
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
    <Navbar></Navbar>
    <Grid textAlign='center' style={{ height: '100%', verticalAlign:'flex-start', marginTop: "100px" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Register a new account
        </Header>
        <Form size='large'>
          <Segment stacked>

            <Form.Input
                fluid
                required
                value={this.state.displayName}
                icon='user'
                iconPosition='left'
                placeholder='Name'
                type="displayName"
                onChange={this.handleChangeDisplayName}
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
                />
                <Form.Input
                fluid
                required
                value={this.state.password}
                icon='lock'
                iconPosition='left'
                placeholder='Create a password'
                type='password'
                onChange={this.handleChangePassword}
            />
                <Form.Input
                fluid
                required
                value={this.state.passwordMatch}
                icon='lock'
                iconPosition='left'
                placeholder='Re-enter Password'
                type='password'
                onChange={this.handleChangePasswordMatch}
            />
            <Button color='teal' fluid size='large' onClick={this.props.registerUser}>
              Register User
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a member? <a href='#'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

// const mapStateToProps = ({isRegisterSuccess}) => ({
//   isRegisterSuccess
// });


//only need to map async props here
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (username, password, displayName) => {
      dispatch(registerUser(username, password, displayName))
    },
    // registerSuccess: (userName, displayName) => {
    //   dispatch(registerSuccess(userName, displayName))
    // },
    // registerFail: () => {
    //   dispatch(registerFail())
    // }
  }
}

export default connect( null , mapDispatchToProps )(RegisterUserForm)