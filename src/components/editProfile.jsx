import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import {connect } from 'react-redux'
import { editProfile, deleteUser } from './action'

class EditProfileForm extends React.Component{

  state = {
    displayName: "",
    password: "",
    passwordMatch: "",
    about: "",
    doesPasswordMatch: false,
  }

  handleDeleteUser = (event) => {
    this.props.deleteUser(this.props.token)
  }

  passwordMismatch = () => {
    return (
      <Segment raised>Passwords don't match, buddy!</Segment>
    )
  }

  profileEditSuccess = () => {
    return (
      <Segment raised>Profile successfully updated!</Segment>
    )
  }

  handleSubmitProfile = () => {
    this.setState({doesPasswordMatch: false})
    if (this.state.password) {
      if (this.state.password === this.state.passwordMatch) {
        this.props.editProfile(this.state.password, this.props.token, this.state.displayName, this.state.about)
      } else {
        this.setState({doesPasswordMatch: true})
      }
    }
    else if (this.state.about || this.state.displayName) {
      this.props.editProfile(this.state.password, this.props.token, this.state.displayName, this.state.about)
    }
    // work on else statement saying you gotta change something
  } 

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleChangePasswordMatch = (event) => {
    this.setState({passwordMatch: event.target.value})
  }

  handleChangeDisplayName = (event) => {
    this.setState({displayName: event.target.value})
  }

  handleChangeAbout = (event) => {
    this.setState({about: event.target.value})
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
        <Grid 
        textAlign='center' 
        style={{ height: '100%', verticalAlign:'flex-start', marginTop: "14em"}}>
        <Grid.Column 
        style={{ maxWidth: 450 }}
        >
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="../miniLogo.png" />Update Your Profile
        </Header>
          {this.state.doesPasswordMatch ? this.passwordMismatch() : null}
          {this.props.isEditing ? this.profileEditSuccess() : null}
        <Form size='large'>
          <Segment stacked
          style={{
          border:"2px solid", 
          borderColor: "rgb(65, 118, 115)",
          }}
          >
            <Form.TextArea
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
              value= {this.state.about}
              iconPosition='left'
              placeholder="Tell us about yourself..."
              onChange={this.handleChangeAbout}
            >
            </Form.TextArea>
            <Form.Input
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
              value= {this.state.displayName}
              icon='user'
              iconPosition='left'
              placeholder='Display name'
              onChange={this.handleChangeDisplayName}
            />
            <Form.Input
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
              value= {this.state.password}
              icon='lock'
              iconPosition='left'
              placeholder='New password'
              type='password'
              onChange={this.handleChangePassword}
            />
              <Form.Input
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
              value={this.state.passwordMatch}
              icon='lock'
              iconPosition='left'
              placeholder='Re-enter new password'
              type='password'
              onChange={this.handleChangePasswordMatch}
            />
            <Button color='teal' fluid size='large' onClick={this.handleSubmitProfile}>
            Submit Changes
            </Button>
          </Segment>
          
        </Form>
        <Header as='h2' color='teal' textAlign='center'>
        Delete Your Account
        </Header>
        <Form>
        <Segment>
          <Form.TextArea
              style={{
                border:"1px solid", 
                borderColor: "rgb(65, 118, 115)",
                }}
              iconPosition='left'
              placeholder="Why are you leaving?"
            >
            </Form.TextArea>
            <Button color='teal' fluid size='large' onClick={this.handleDeleteUser}>
              Delete Forever
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      token: state.auth.token,
      isEditing: state.isPasswordUpdated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (password, token, displayName, about) => {
      dispatch(editProfile(password, token, displayName, about))
    },
    deleteUser: (token) => {
      dispatch(deleteUser(token))
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(EditProfileForm)