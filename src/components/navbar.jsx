import React from 'react'
import { Button, Grid } from "semantic-ui-react"
import { feedButtonRoute , editProfileButtonRoute , loginButtonRoute , profileButtonRoute , userLogout } from './action'
import { connect } from 'react-redux'

class Navbar extends React.Component {
    
    handleFeedButton = () => {
        this.props.feedButtonRoute()
    }

    handleEditProfileButton = () => {
        
    }
    
    render() {

        return (

            <div className="navbar"
            style={{
                position: "relative",
                width: "100%",
            }}
            >
                <nav style={{display: "flex", justifyContent: "center"}}>
                    <img 
                        className="banner" 
                        src={require("../kwitterLogoFlare.png")}
                        // style={{marginBottom: "18em"}}
                        />
                </nav>
                <Grid.Row
                column={3}
                style={{
                    zIndex: 9,
                    color: "rgb(65, 118, 115)",
                    fontSize: 16,
                    padding: "2",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 5,
                    textAlign: "center",
                    marginTop: "-11em",
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyContent: "flex-start",
                    marginRight: "5em",
                }}>
                    <Grid.Column>
                        <Button
                        style={{
                            color: "rgb(65, 118, 115)",
                            backgroundColor: "white",
                            padding: "8px"
                        }}
                        >
                            Logout
                        </Button>

                    </Grid.Column>
                    <Grid.Column>
                        <Button
                        style={{
                            color: "rgb(65, 118, 115)",
                            backgroundColor: "white",
                            padding: "8px"

                        }}> 
                            Edit Profile
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                        onClick={this.handleFeedButton}
                        style={{
                            color: "rgb(65, 118, 115)",
                            marginRight: "4px",
                            backgroundColor: "white",
                            padding: "8px"
                        }}
                        > 
                            Feed
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </div>
        )
    }
}

// function mapStateToProps({auth, userId, user, users, messages}) {
//     auth,
//     userID, 
//     user,
//     users,
//     messages
//   }
  
const mapDispatchToProps = (dispatch) => {
    return {
        feedButtonRoute: () => {
            dispatch(feedButtonRoute())
        },
    }
}
  

export default connect(null,mapDispatchToProps)(Navbar)