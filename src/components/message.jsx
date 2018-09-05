import React from 'react'
import { connect } from 'react-redux'
import { Icon, Divider, Container, Card, Grid } from "semantic-ui-react"
import { deleteMessage, deleteLike, likeMessage } from "./action.js"
class MessageComponent extends React.Component {

  handleDeleteMessage = () => {
    this.props.deleteMessage(this.props.auth.token, this.props.messageId)
  }

  handleLikeMessage = () => {
    this.props.likeMessage(this.props.userId, this.props.messageId, this.props.auth.token)
  }

  handleUnlikeMessage = () => {
    // this.props.deleteLike(token, likeId)
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
          <Grid.Column>
            <Icon 
            link 
            name="close"
            style={{
              display: "flex",
              color: "rgb(206, 206, 207"
            }}>
            </Icon>
          </Grid.Column>
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
              <span>{this.props.summary}</span>
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
          <Grid.Column 
          style={{
            marginTop: 5,
            color: "rgb(206, 206, 207",
          }}>
              <span>{this.props.meta}</span>
            <Icon 
            link
            onClick={this.handleLikeMessage}
            name="thumbs up outline" 
            size="large" 
            style={{
              color: "rgb(206, 206, 207",
              marginLeft: 5,
              marginBottom: 5,
            }}>
            </Icon>
          </Grid.Column>
        </Grid.Row>
      </Card>
    </div>

  )
}    
}

// const mapStateToProps = ({auth, userID , user, users, messages}) => ({
//   auth,
//   userID,
//   user,
//   users,
//   messages
// });

const mapDispatchToProps = (dispatch) => {
  return {
    likeMessage: (userId, messageId, token) => {
      dispatch(likeMessage(userId, messageId, token))
    },
    deleteLike: (token, likeId) => {
      dispatch(deleteLike(token, likeId))
    },
    deleteMessage: (token, messageId) => {
      dispatch(deleteMessage(token, messageId))
    }
  }
}
 
export default connect(undefined, mapDispatchToProps)(MessageComponent)