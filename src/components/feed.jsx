import React from 'react'
import { Feed } from 'semantic-ui-react'


//layout for feed page displaying user messages or all messages. will need to put message objects into an array that we can cycle through
const messages = [
  {}
]

const feedMessageProp = () => <Feed messages={messages} />

export default feedMessageProp
