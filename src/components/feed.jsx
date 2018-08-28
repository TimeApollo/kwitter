import React from 'react'
import { Feed } from 'semantic-ui-react'
import fetchMessages from "./action.js"


class MessageFeed extends React.Component {

  getMessages = () => {
    this.props.fetchMessages(this.state.messages, this )
  }
  messages = []
//layout for feed page displaying user messages or all messages. will need to put message objects into an array that we can cycle through
}

const feedMessageProp = () => <Feed messages={messages} />

export default feedMessageProp
