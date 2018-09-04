import React from 'react'
import { Image, Card, Divider, Icon } from 'semantic-ui-react'
import Link from "react"


class ProfileSidebar extends React.Component {

  render() {
    return (
      <React.Fragment>
      <Card.Group
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
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
        <Card.Header textAlign="center">Username
          <Divider></Divider>
          Display Name
        </Card.Header>
        <Divider></Divider>
        <Card.Description textAlign="center">
        Member since
        <br></br>
        April 29, 1992
        <Divider></Divider>
          <h3 style={{marginTop: 0, marginBottom: 0, color: "black"}}><strong>About</strong></h3>
          <br></br>
          <p style={{marginTop: "-1em"}} >
          Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
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
        <Card.Content>
        Username
        <Divider style={{maxWidth: "4em", marginLeft: "auto", marginRight: "auto"}} ></Divider>
        yoooo Shiver me timbers to go on account lookout wherry doubloon chase.
        </Card.Content>
        <Divider style={{backgroundColor: "black"}} ></Divider>
        <Card.Content>
        Username
        <Divider style={{maxWidth: "4em", marginLeft: "auto", marginRight: "auto"}} ></Divider>
        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.
        </Card.Content>
        <Divider style={{backgroundColor: "black"}} ></Divider>
        <Card.Content>
        Username
        <Divider style={{maxWidth: "4em", marginLeft: "auto", marginRight: "auto"}} ></Divider>
        Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers
        </Card.Content>
      </Card.Content>
      </Card>
      </Card.Group>
      </React.Fragment>
)}}

export default ProfileSidebar
