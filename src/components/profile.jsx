import React from 'react';
import Navbar from './navbar.jsx';
import MessageComponent from "./message"
import ProfileSidebar from "./sidebar"
import { Container } from "semantic-ui-react"

import { connect } from 'react-redux';
import { fetchUsers , fetchOneUser , fetchMessages } from './action'
import NewMessage from "./newMessage"


class Profile extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchOneUser(this.props.userID);
    this.props.fetchMessages();
  }

  render(){
    return(
      <div className='profile'
        style= {{
          display: "flex",
          justifyContent: "center",
          maxWidth: "60em",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ProfileSidebar>
        </ProfileSidebar>
        <Container>
        <NewMessage></NewMessage>
        <MessageComponent></MessageComponent>
        <MessageComponent></MessageComponent>
        <MessageComponent></MessageComponent>
        <MessageComponent></MessageComponent>
        <MessageComponent></MessageComponent>
        <MessageComponent></MessageComponent>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({auth, userID , user}) => ({
  auth,
  userID,
  user
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: ( limit , offset ) => {
      dispatch(fetchUsers( limit , offset ))
    },
    fetchOneUser: ( userID ) => {
      dispatch( fetchOneUser( userID ))
    },
    fetchMessages: () => {
      dispatch( fetchMessages())
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(Profile)