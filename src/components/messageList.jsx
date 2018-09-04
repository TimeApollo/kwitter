import React from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from "react-redux"
import MessageComponent from "./message"
import { fetchMessages, fetchUsers, fetchOneUser } from "./action.js"
import { Switch, Route } from "react-router-dom"

class MessageFeed extends React.Component {

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchOneUser(this.props.userID);
    this.props.fetchMessages();
  }

  matchIdtoUsername = (userId) => {
    let name = this.props.users.filter(user => user.id === userId)
    console.log(name)
    return name[0].username
  }

  feedMessages = () => {
    return (
      this.props.messages.map(message =>{
        return (
            <MessageComponent
              date={this.formatPostDate(message.createdAt)}
              meta={message.likes.length}
              summary={message.text}
              messageId={message.id}
              username={this.matchIdtoUsername(message.userId)}
            >
            </MessageComponent>
        )
      })
    )
  }

  profileMessages = () => {
    return (
      this.props.messages.map(message =>{
        return (
            <MessageComponent
              date={this.formatPostDate(message.createdAt)}
              meta={"likes " + message.likes.length}
              summary={message.text}
              messageId={message.id}
              username={this.matchIdtoUsername(message.userId)}
            >
            </MessageComponent>
        )
      })
    )
  }

  formatPostDate = (date) => {

    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let monthIndex = parseInt(date.substring(5, 7))

    let time = date.substring(11,19)

    let day = date.substring(8, 9)

    let year = date.substring(0, 4)

    return months[monthIndex] + " " +  day + ", "+ year + " at " + time
  }

  
  render() {

    const feedMessages = this.messageObject
    return (
      <div
          style={{ 
          display: "flex",
          justifyContent: "center",
          paddingTop: "5em",
          overflowX: "hidden",
          overflowY: "scroll"
          }}
      >
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40em",
        marginBottom: "1em",
      }}
    >
      <Switch>
        <Route path="/feed" component={this.feedMessages}></Route>
        <Route path="/home" component={this.profileMessages}></Route>
      </Switch>
    </Container>
    </div>
    )}}
  
const mapStateToProps = ({auth, userID , user, users, messages}) => ({
  auth,
  userID,
  user,
  users,
  messages
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


export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed)