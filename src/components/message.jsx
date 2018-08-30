import React from 'react'
import { connect } from 'react-redux'
import { Icon, Divider, Button, Container, Card, Grid } from "semantic-ui-react"
import Navbar from './navbar';

class MessageComponent extends React.Component {

    render() {
        return (
        <div>
        <Navbar></Navbar>
        <Card 
        fluid 
        centered
        style={{border:"3px solid", borderColor: "rgb(65, 118, 115)", maxWidth: 550, padding: 10}}
        >
            <header>
                <Grid.Row 
                columns={3}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"

                    }}
                >
                    <Grid.Column style={{maxWidth: "6em"}} >
                       <div paddingBottom="15px">Usernamethatislonger</div>
                        <br></br>
                        <Divider></Divider>
                    <img src={require("../avatarAvatar.png")} width={60} height={60}
                        style={{
                            border: "1px solid", 
                            borderColor: "rgb(65, 118, 115)", 
                            backgroundColor: "rgb(0, 169, 160)", 
                            borderRadius: "50px",
                        }}
                    />
                    </Grid.Column>
                    <Grid.Column 
                        style ={{
                            display: "flex",
                            flexWrap: "wrap",
                            maxWidth: "350px"
                        }}
                    >
                        <Container text style={{margin:"20px"}}>
                        Prow scuttle provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Arrrrgh.
                        </Container>
                    </Grid.Column>
                    <Grid.Column
                        style= {{
                            display:"flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <Button style={{
                            borderColor: "rgb(65, 118, 115)",
                            border: ".5px solid",
                            backgroundColor: "rgb(213, 242, 232)", 
                            paddingLeft: ".4em",
                            paddingRight: ".4em",
                            paddingTop: 0,
                            paddingBottom: 0,
                            maxHeight: "2em",
                        }} 
                        >
                        Delete
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </header>

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>April 24, 1992 5:00</Grid.Column>
                    <Grid.Column textAlign="right">Likes: 5</Grid.Column>
                </Grid.Row>
          </Grid>
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