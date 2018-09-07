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
    if(name[0]) return name[0].username
    return 'Deleted'
  }

  isMessageLikedByUser = (likes) => {
    return likes.some(like => like.userId === this.props.userID)
  }

  likeId = (likes) => {
    let like = likes.filter(like => like.userId === this.props.userID)
    if (like.length > 0){
      return like[0].id
    }else{
      return null
    }
  }

  feedMessages = () => {
    return (
      this.props.messages.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map(message =>{
        return (
            <MessageComponent
              date={this.formatPostDate(message.createdAt)}
              totalLikes={message.likes.length}
              likeId={this.likeId(message.likes)}
              isLiked={this.isMessageLikedByUser(message.likes)}
              summary={message.text}
              messageId={message.id}
              username={this.matchIdtoUsername(message.userId)}
              key={message.id}
            >
            </MessageComponent>
        )
      })
    )
  }

  profileMessages = () => {
    return (
      this.props.user.messages.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map(message =>{
        return (
            <MessageComponent
              date={this.formatPostDate(message.createdAt)}
              totalLikes={message.likes.length}
              likeId={this.likeId(message.likes)}
              isLiked={this.isMessageLikedByUser(message.likes)}
              summary={message.text}
              messageId={message.id}
              username={this.matchIdtoUsername(message.userId)}
              key={message.id}
            >
            </MessageComponent>
        )
      })
    )
  }

  formatPostDate = (date) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const zeroes = [ '00' , '01' , '02' , '03' , '04' , '05' , '06' , '07' , '08' , '09' ]

    let dateObject = new Date(date)
    let month = dateObject.getUTCMonth()
    let day = dateObject.getUTCDate()
    let year = dateObject.getUTCFullYear()
    let hours = dateObject.getHours()
    let ending = 'AM'
    if (hours === 0){
      hours = 12
    }else if ( hours < 10 ){
      hours = zeroes[hours]
    }else if (hours === 12){
      ending = 'PM'
    }else if(hours > 12){
      hours = hours - 12;
      ending = 'PM'
    }
    let minutes = dateObject.getMinutes()
    if ( minutes < 10 ){
      minutes = zeroes[minutes]
    }
    let seconds = dateObject.getSeconds()
    if ( seconds < 10 ){
      seconds = zeroes[seconds]
    }

    return `${months[month]} ${day}, ${year} at ${hours}:${minutes}:${seconds} ${ending}`;
  }

  
  render() {

    return (
      <div
          style={{ 
          display: "flex",
          justifyContent: "center",
          }}
      >
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40em",
        marginBottom: "1em",
        border: "none",
      }}
    >
      <Switch>
        <Route path="/feed" component={ this.props.messages && this.props.users ? this.feedMessages : null }></Route>
        <Route path="/home" component={ this.props.user.messages ? this.profileMessages : null }></Route>
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