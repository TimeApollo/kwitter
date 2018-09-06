import React, { Component } from 'react';
import { Container } from "semantic-ui-react"
import { withRouter , Switch , Route , Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { registerUser , registerSuccess , registerFail } from './action';
import LoginForm from "./login.jsx";
import EditProfileForm from "./editProfile.jsx";
import RegisterUserForm from "./register.jsx";
import MessageFeed from './feed';
import Profile from './profile';
import Message from "./message"
import Navbar from "./navbar"

class App extends Component {
  render() {
    return (
      // <React.Fragment>
    //   {/* //   <MessageFeed></MessageFeed> */}
    //     {/* <Navbar></Navbar> */}
    //     {/* <Message></Message> */}
    //     {/* <Message></Message> */}
    //     {/* <Message></Message> */}
    //     {/* <ProfileSidebar></ProfileSidebar> */}
    //   {/* //   <RegisterUserForm></RegisterUserForm> */}
    //   {/* //   <LoginForm></LoginForm> */}
    //   {/* //   <EditProfileForm></EditProfileForm> */}
    //   {/* <Profile></Profile> */}
    //  {/* </React.Fragment> */}
    <div>
      <Switch>
        <Route path='*' component={Navbar}/>
      </Switch>
      <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route path='/register' component={RegisterUserForm}/>
        <Route path='/messages' component={MessageFeed}/>
        <Route path='/home' component={Profile}/>
        <Route path='/feed' component={MessageFeed}/>
        <Route path='/edit' component={EditProfileForm}/>
      </Switch>
    </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   auth: {
//     token: state.auth.token,
//     success: state.auth.success
//   },
//   messages: state.messages,
//   message: state.message,
//   user:state.user,
//   users:state.users,
//   userID: state.userID,
//   register:{
//     isRegisterSuccess: state.isRegisterSuccess,
//     isRegisteringUser: state.isRegisteringUser,
//     isRegisterFail: state.isRegisterFail,
//   },
//   isPasswordUpdated: state.isPasswordUpdated,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerSuccess: (userName, displayName) => {
//       dispatch(registerSuccess(userName, displayName))
//     },
//     registerUser: (username, password, displayName) => {
//       dispatch(registerUser(username, password, displayName))
//     },
//     registerFail: () => {
//       dispatch(registerFail())
//     }
//   }
// }

export default withRouter((App));
