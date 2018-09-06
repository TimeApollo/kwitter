import React from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'
import { postMessageFeed, postMessageProfile, fetchOneUser, fetchMessages } from "./action"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

class NewMessage extends React.Component {

    state = {
        message: "",
        // messageIsLongEnough: false
    }

    profileForm = () => {
        return (
            <Form
            style={{
                marginBottom: "3em", 
                marginTop: "14em",
            }}
            >
            <TextArea
                placeholder="What's on your mind?"
                onChange={this.handleSubmitMessage}
                value={this.state.message}
                onKeyPress={this.handleNewMessageProfileEnter}
                maxLength= "255"
            />
            <Button
                style={{
                    color: "rgb(65, 118, 115)",
                    padding: "8px",
                }}
                onClick={this.handleNewMessageProfileButton}
                >
                Submit
            </Button>
        </Form>

        )
    }
    handleNewMessageProfileEnter= (event) => {
        if (event.key === "Enter") {
            this.props.postMessageProfile(this.props.token, this.state.message, this.props.userID)
            this.props.fetchOneUser(this.props.userID)
            this.setState({message: ""})
        }
    }

    handleNewMessageProfileButton = (event) => {
        this.props.postMessageProfile(this.props.token, this.state.message, this.props.userID)
        this.props.fetchOneUser(this.props.userID)
        this.setState({message: ""})
    }

    feedForm = () => {

        
        return (
        <Form
            style={{
                marginBottom: "3em", 
                marginTop: "14em",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <TextArea
                placeholder="What's on your mind?"
                onChange={this.handleSubmitMessage}
                value={this.state.message}
                onKeyPress={this.handleNewMessageEnter}
                maxLength= "255"
                style= {{maxWidth: "35.7em"}}
            />
            <Button
                style={{
                    color: "rgb(65, 118, 115)",
                    padding: "8px"
                }}
                onClick={this.handleNewMessageButton}
                >
                Submit
            </Button>
        </Form>
        )
    }

    handleSubmitMessage = (event) => {
        this.setState({message: event.target.value})
    }

    handleNewMessageEnter = (event) => {
        if (event.key === "Enter") {
            this.props.postMessageFeed(this.props.token, this.state.message)
            this.props.fetchMessages()
            this.setState({message: ""})

        }
    }

    handleNewMessageButton = (event) => {
        this.props.postMessageFeed(this.props.token, this.state.message)
        this.props.fetchMessages()
        this.setState({message: ""})
    }
    

    render() {
        return (
            <Switch>
                <Route path="/home" component={this.profileForm}/>
                <Route path="/feed" component={this.feedForm}/>
            </Switch>
    )}
}

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        userID: state.userID
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        postMessageFeed: (token, text) => {
            dispatch(postMessageFeed(token, text))
        },
        postMessageProfile: (token, text, userID) => {
            dispatch(postMessageProfile(token, text, userID))
        },
        fetchOneUser: (userId) => {
            dispatch(fetchOneUser(userId))
        },
        fetchMessages: () => {
            dispatch(fetchMessages())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage)
