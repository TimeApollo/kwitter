import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux"
import MessageFeed  from "./messageList"
import  NewMessage from "./newMessage"
import { fetchUsers , fetchOneUser , fetchMessages } from './action'

class FeedPage extends React.Component {

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchOneUser(this.props.userID);
    this.props.fetchMessages();
  }

  render() {
    return (
      <Container
      style={{
        marginTop: "15em",
      }}
      >
        <NewMessage></NewMessage>
        <MessageFeed></MessageFeed>
      </Container>
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

export default connect( mapStateToProps , mapDispatchToProps )(FeedPage)
