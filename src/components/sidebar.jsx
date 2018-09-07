import React from 'react'
import { Card, Divider, Icon } from 'semantic-ui-react'
import { connect } from "react-redux"
import { fetchMessages, fetchUsers, fetchOneUser } from "./action.js"


class ProfileSidebar extends React.Component {


  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchOneUser(this.props.userID);
    this.props.fetchMessages();
  }

  formatJoinDate = (date) => {

    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let dateObject = new Date(date)
    let month = dateObject.getUTCMonth() + 1
    let day = dateObject.getUTCDate()
    let year = dateObject.getUTCFullYear()

    return months[month] + " " + day + ", " + year;

  }
  matchIdtoUsername = (userId) => {
    let name = this.props.users.filter(user => user.id === userId)
    if(name[0]) return name[0].username
    return 'Deleted'
  }

  trendingMessages = () => {
    
    let topMessages = this.props.messages.sort((a,b) => b.likes.length - a.likes.length).slice(0, 7)

    return (
      topMessages.map(message =>{
        return(
        <div key={message.id}>
        <Card.Content>
        {this.matchIdtoUsername(message.userId)}
          <Divider style={{maxWidth: "4em", marginLeft: "auto", marginRight: "auto"}}></Divider>
        {message.text}
        </Card.Content>
        <Divider style={{backgroundColor: "black"}} ></Divider>
        </div>
        )
      })
    )
  }  

  render() {

    return (
  <Card.Group
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      marginTop: "13.2em"
    }} >
      <Card
      centered
      style={{
        border:"3px solid", 
        borderColor: "rgb(65, 118, 115)", 
        marginLeft: "-3em",
        width: "25em",
        height: "41em",
        overflowX: "hidden",
        padding: "1em",
        marginBottom: "2em"
        }}
      >
        <Card.Content>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
            src={require("../avatarAvatar.png")}
            alt='user avatar' 
            style={{
              border: "1px solid", 
              borderColor: "rgb(65, 118, 115)", 
              backgroundColor: "rgb(0, 169, 160)", 
              borderRadius: "4em",
              width: "8em",
              height: "8em",
              marginRight: "auto", 
              marginLeft: "auto",
            }}
            />
      </div>
        <Divider></Divider>
      <Card.Header textAlign="center">
      {this.props.user.username}
        <Divider></Divider>
      {this.props.user.displayName}
      </Card.Header>
        <Divider></Divider>
      <Card.Description textAlign="center">
        Member since
        <br></br>
      {this.props.user.createdAt ? this.formatJoinDate(this.props.user.createdAt) : null}
        <Divider></Divider>
      <h3 style={{marginTop: 0, marginBottom: 0, color: "black"}}><strong>About</strong></h3>
        <br></br>
      <p style={{marginTop: "-1em"}} >
        {this.props.user.about}
      </p>
      </Card.Description>
    </Card.Content>
    </Card>
    <Card
    centered
    style={{
      border:"3px solid", 
      borderColor: "rgb(65, 118, 115)", 
      marginLeft: "-3em",
      width: "25em",
      height: "41em",
      overflowX: "hidden",
      padding: "1em",
      }}
    >
    <Card.Content style={{textAlign: "center"}} >
      <Card.Header>Trending  <Icon name="chart line"></Icon>
        <Divider style={{backgroundColor: "black"}} ></Divider>
      </Card.Header>
      {this.props.messages && this.props.users ? this.trendingMessages() : null}
    </Card.Content>
    </Card>
  </Card.Group>
)}}

const mapStateToProps = ({user, messages, users}) => ({
  user,
  messages,
  users
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar)