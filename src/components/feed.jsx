import React from 'react'
import { Feed } from 'semantic-ui-react'
import { connect } from "react-redux"
import Navbar from "./navbar.jsx"

class MessageFeed extends React.Component {

  messageObject = () => {

      const messageArray = this.props.messages.map ( message => {
        return {
          "date": message.createdAt,
          "meta": message.likes.length,
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
      paddingRight: "15em"
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
    "messages": state.messages
  }
}


export default connect(mapStateToProps , undefined)(MessageFeed)