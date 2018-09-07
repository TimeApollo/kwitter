import React from 'react'
import { connect } from 'react-redux'
import { Switch , Route } from 'react-router-dom'
import { Icon, Divider, Container, Card, Grid } from "semantic-ui-react"
import { deleteMessageProfile , deleteMessageFeed , deleteLike, likeMessage, } from "./action.js"
class MessageComponent extends React.Component {

  state = {
    isLiked: this.props.isLiked,
    totalLikes: this.props.totalLikes,
    likeId: this.props.likeId,
  }

  handleLikeMessage = () => {
    this.props.likeMessage(this.props.userId, this.props.messageId, this.props.auth.token)
      .then(like => {
        return this.setState({isLiked: true , totalLikes: this.state.totalLikes + 1 , likeId: like})
      })
  }

  unlikedMessage = () => {
    return (
      <Grid.Column 
        style={{
          marginTop: 5,
          color: "rgb(73, 166, 159",
        }}>
            <span>{`Likes: ${this.state.totalLikes}`}</span>
        <Icon 
          link
          onClick={this.handleLikeMessage}
          name="thumbs up outline" 
          size="large" 
          style={{
            color: "rgb(225, 225, 225",
            marginLeft: 5,
            marginBottom: 5,
          }}>
        </Icon>
      </Grid.Column>
    )
  }

  handleUnLikeMessage = () => {
    this.props.deleteLike(this.props.auth.token, this.state.likeId)
    this.setState({isLiked: false , totalLikes: this.state.totalLikes - 1})
  }

  likedMessage = () => {
    return (
      <Grid.Column 
        style={{
          marginTop: 5,
          color: "rgb(73, 166, 159",
        }}>
            <span>{`Likes: ${this.state.totalLikes}`}</span>
        <Icon 
          link
          onClick={this.handleUnLikeMessage}
          name="thumbs up outline" 
          size="large" 
          style={{
            color: "rgb(73, 166, 159",
            marginLeft: 5,
            marginBottom: 5,
          }}>
        </Icon>
      </Grid.Column>
    )
  }

  handleDeleteMessageProfile = () => {
    this.props.deleteMessageProfile(this.props.auth.token, this.props.messageId, this.props.userID)
  }

  handleDeleteMessageFeed = () => {
    this.props.deleteMessageFeed(this.props.auth.token, this.props.messageId)
  }

  deleteButtonProfile = () => {
    return (
      <Grid.Column>
        <Icon 
          link 
          name="close"
          onClick={this.handleDeleteMessageProfile}
          style={{
            display: "flex",
            color: "rgb(206, 206, 207"
          }}
        >
        </Icon>
      </Grid.Column>
    )
  }

  deleteButtonFeed = () => {
    return (
      <Grid.Column>
        <Icon 
          link 
          name="close"
          onClick={this.handleDeleteMessageFeed}
          style={{
            display: "flex",
            color: "rgb(206, 206, 207"
          }}
        >
        </Icon>
      </Grid.Column>
    )
  }

render() {
  return (
    <div>
      <Card
        fluid
        centered
        style={{
          border:"3px solid", 
          borderColor: "rgb(65, 118, 115)", 
          width: "40em", 
          padding: "1.5em",
          marginBottom: "1em",
          height: "auto"
        }}
      >
        <Grid.Row
          columns={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid.Column
          style={{
            display: "flex",
            alignSelf: "center"
          }}
          >
            <span>{this.props.username}</span>
          </Grid.Column>
          <Switch>
            <Route path='/home' component={this.deleteButtonProfile}/>
            <Route path='/feed' component={this.deleteButtonFeed}/>
          </Switch>
        </Grid.Row>
        <Grid.Row 
          column={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Grid.Column>
            <Divider></Divider>
            <img
              src={require("../avatarAvatar.png")}
              alt='user avatar' 
              width={60} 
              height={60}
              style={{
                border: "1px solid", 
                borderColor: "rgb(65, 118, 115)", 
                backgroundColor: "rgb(0, 169, 160)", 
                borderRadius: "50px",
            }}
            />
            <Divider></Divider>
          </Grid.Column>
          <Grid.Column
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px",
                height: "auto"
            }}
          >                
            <Container
            style={{
              padding: "1em",
              height: "auto"
            }}
            >
              <span
              style={{
                wordWrap:"break-word"
              }}
              >{this.props.summary}</span>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid.Column
          style={{
            display: "flex",
            alignSelf: "center"
          }}
          >
            <span>{this.props.date}</span>
          </Grid.Column>
            {this.state.isLiked ? this.likedMessage() : this.unlikedMessage()}
        </Grid.Row>
      </Card>
    </div>

  )
}    
}

const mapStateToProps = ({auth, userID , user, users, messages}) => ({
  auth,
  userID,
  user,
  users,
  messages
});

const mapDispatchToProps = (dispatch) => {
  return {
    likeMessage: (userId, messageId, token) => {
      return dispatch(likeMessage(userId, messageId, token))
    },
    deleteLike: (token, likeId) => {
      dispatch(deleteLike(token, likeId))
    },
    deleteMessageProfile: (token, messageId , userID) => {
      dispatch(deleteMessageProfile(token, messageId, userID))
    },
    deleteMessageFeed: (token, messageId) => {
      dispatch(deleteMessageFeed(token, messageId))
    }
  }
}
 
export default connect( mapStateToProps, mapDispatchToProps )(MessageComponent)