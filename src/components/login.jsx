import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { registerUser , registerSuccess , registerFail } from './action'

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
    <nav style={{display: "flex", justifyContent: "center"}}>
      <img className="banner" src={require("../kwitterLogoFlare.png")}/>
    </nav>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large' onClick={this.props.registerUser}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Register</a>
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