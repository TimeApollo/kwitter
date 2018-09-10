import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin , clickedRegisterLink } from './action';

class LoginForm extends React.Component{
  
  state = {
    username: "",
    password: ""
  }

  handleSubmitLogin = () => {
    this.props.userLogin(this.state.username, this.state.password)
  }

  handleChangeUser = (event) => {
    this.setState({username: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value}) 
  }
  
  handleRegisterRouteChange = () => {
    this.props.clickedRegisterLink()
  }

  registerSuccess = () => {
    return (
      <Segment raised>Account Successfully Created! Welcome To Kwitter! Please login with new account info</Segment>
    )
  }
  
  render(){

    let loginFail = <Segment raised>Username and Password do not match. If you are new, please register by hitting the register button below. If you have forgotten your password, you are shit out of luck. We have no recovery system.</Segment>
        

    return (
      <div className='login-form'
      style={{marginTop: "14em"}}
      >
        <style> {`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%', verticalAlign:'flex-start', marginTop: "18em" }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            { this.props.register.isRegisterSuccess ? this.registerSuccess() : null }
            { this.props.auth.isLoginFail ? loginFail : null }
            <Header as='h2' color='teal' textAlign='center'>
              <Image src="logo.png" />Log-in to your account
            </Header>
            <Form size='large'>
              <Segment 
                stacked         
                style={{
                  border:"2px solid", 
                  borderColor: "rgb(65, 118, 115)",
              }}>
                <Form.Input
                  fluid
                  required
                  autoFocus
                  value= {this.state.username}
                  className="username"
                  icon='user' 
                  iconPosition='left' 
                  placeholder='Username'
                  onChange= {this.handleChangeUser}
                  style={{
                    border:"1px solid", 
                    borderColor: "rgb(65, 118, 115)",
                    }}
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
                  style={{
                    border:"1px solid", 
                    borderColor: "rgb(65, 118, 115)",
                    }}
                />
                <Button color='teal' fluid size='large' onClick={this.handleSubmitLogin}>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message                   
              style={{
                border:"1.2px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
            >
              New to us? 
              <Link 
                style={{
                  color: "rgb(65, 118, 115)",
                  fontWeight: "bold"
                }} 
              to='/register' onClick={this.handleRegisterRouteChange}> Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({auth , register}) => ({
  auth,
  register
});

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password) => {
      dispatch(userLogin(username, password))
    },
    clickedRegisterLink: () => {
      dispatch(clickedRegisterLink());
    },
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(LoginForm)