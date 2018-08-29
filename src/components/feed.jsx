import React from 'react'
import { Feed, } from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from "./navbar.jsx"

class MessageFeed extends React.Component {

  formatPostDate = (date) => {

    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let monthIndex = date.parseInt(substring(5, 7))

    let time = date.substring(11,18)

    let date = date.substring(8, 9)

    let year = date.substring(0, 4)

    return time + " " + months[monthIndex] + " " +  date + ", "+ year 
}


  messageObject = () => {


      const messageArray = this.props.messages.map ( message => {
        return {
          "date": this.formatPostDate(date),
          // "image": avatar,
          "meta": "likes " + message.likes.length,
          "summary": message.text
        }
      }
    )
    return messageArray
  }
  
  render() {

    const feedMessages = this.messageObject
    return (
      <div>
      <Navbar></Navbar>
      <div
      style={{ 
      display: "flex",
      justifyContent: "center",
      paddingTop: "5em",
    }}
      >
      <Feed 
      events={this.messageObject()}/>

      </div>
      </div>
    )}
  }


function mapStateToProps(state) {
  return {
    "messages": state.messages,
    "date": state.messages.createdAt
  }
}


export default connect(mapStateToProps , undefined)(MessageFeed)