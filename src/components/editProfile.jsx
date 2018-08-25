import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { registerUser , registerSuccess , registerFail } from './action'
import Navbar from "./navbar.jsx"

class LoginForm extends React.Component{
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
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Update your profile
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
              fluid
              required
              class= "username" 
              icon='user' 
              iconPosition='left' 
              placeholder='Username'
              />
            <Form.Input
              fluid
              required
              class= "password" 
              icon='lock' 
              iconPosition='left' 
              placeholder='Old password'
              type="password"
              />
            <Form.Input
              fluid
              required
              class="newPassword"
              icon='lock'
              iconPosition='left'
              placeholder='New password'
              type='password'
            />
              <Form.Input
              fluid
              required
              class="newPassword"
              icon='lock'
              iconPosition='left'
              placeholder='Re-enter new password'
              type='password'
            />
            <Button color='teal' fluid size='large' onClick={this.props.registerUser}>
              Submit Changes
            </Button>
          </Segment>
        </Form>
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

export default connect( null , mapDispatchToProps )(LoginForm)