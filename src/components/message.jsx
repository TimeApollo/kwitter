import React from 'react'
import { connect } from 'react-redux'
import { Icon, Divider, Container, Card, Grid } from "semantic-ui-react"
// import ProfileSidebar from './sidebar';

class MessageComponent extends React.Component {

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
          >Usernamethatislonger</Grid.Column>
          <Grid.Column>
            <Icon 
            link 
            name="close"
            style={{
              display: "flex",
              color: "rgb(206, 206, 207"}}>
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
              style ={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "350px"
            }}
          >                
            <Container
            style={{
              padding: "1em"
            }}
            >
              Prow scuttle provost Sail ho shrouds spiritsboom mizzenmast yardarm. Pinnace holystonemizzenmast quartercrow's nest nipperkin grogyardarm hempen halter furl. Swab barqueinterloper chantey doubloon starboardgrogblack jack gangway rutters. Arrrrgh.
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
          >April 29, 1992 5:00 pm</Grid.Column>
          <Grid.Column>
            <Icon 
            link 
            name ="thumbs up outline" 
            size="large" 
            style={{color: "rgb(206, 206, 207"}}>
            </Icon>
          </Grid.Column>
        </Grid.Row>
      </Card>
    </div>

  )
}    
}

function mapStateToProps(state) {
    return {
      "messages": state.messages
    }
  }
  
  
  export default connect(mapStateToProps, undefined)(MessageComponent)