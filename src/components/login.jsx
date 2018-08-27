import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { registerUser , registerSuccess , registerFail, userLogin , fetchUsers , userLogout , fetchMessages , postMessage , fetchOneMessage } from './action'
import Navbar from "./navbar.jsx"

class LoginForm extends React.Component{
  
  state = {
    username: "",
    password: ""
  }
  //click handler

  handleSubmitLogin = () => {
    this.props.userLogin(this.state.username, this.state.password)
    this.props.fetchUsers();
    this.props.fetchMessages();
    this.props.fetchOneMessage(337);
  }

  handleChangeUser = (event) => {
    this.setState({username: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value}) 
  }

  handleTest = () => {
    // console.log(this.props.auth.token)
    this.props.postMessage(this.props.auth.token, 'this is a test from TimeApollo45')
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
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              required
              value= {this.state.username}
              className="username"
              icon='user' 
              iconPosition='left' 
              placeholder='Username'
              onChange= {this.handleChangeUser}
              />
            <Form.Input
              fluid
              required
              value= {this.state.password}
              className="password"
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange= {this.handleChangePassword}
            />
            <Button color='teal' fluid size='large' onClick={this.handleSubmitLogin}>
              Login
            </Button>
            <Button color='teal' fluid size='large' onClick={this.handleTest}>
              Logout
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

const mapStateToProps = ({auth}) => ({
  auth
});


//only need to map async props here
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password) => {
      dispatch(userLogin(username, password))
    },
    fetchUsers: (limit, offset) => {
      dispatch(fetchUsers(limit, offset))
    },
    userLogout: () => {
      dispatch(userLogout())
    },
    fetchMessages: () => {
      dispatch(fetchMessages())
    },
    fetchOneMessage: (messageId) => {
      dispatch(fetchOneMessage(messageId))
    },
    postMessage: (token, text) => {
      dispatch(postMessage(token,text))
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(LoginForm)