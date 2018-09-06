import React from 'react'
import { Button, Grid } from "semantic-ui-react"
import { feedButtonRoute , editProfileButtonRoute , loginButtonRoute , profileButtonRoute , userLogout , registerButtonRoute } from './action'
import { connect } from 'react-redux'
import { Switch , Route } from 'react-router-dom'

class Navbar extends React.Component {
    
    feedButton = () => {
        return (
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
        )
    }

    handleFeedButton = () => {
        this.props.feedButtonRoute()
    }

    editProfileButton = () => {
        return (
            <Button
                onClick={this.handleEditProfileButton}
                style={{
                    color: "rgb(65, 118, 115)",
                    backgroundColor: "white",
                    padding: "8px"
                }}> 
                    Edit Profile
            </Button>
        )
    }

    handleEditProfileButton = () => {
        this.props.editProfileButtonRoute()
    }

    loginButton = () => {
        return (
            <Button
                onClick={this.handleLoginButton}
                style={{
                    color: "rgb(65, 118, 115)",
                    backgroundColor: "white",
                    padding: "8px"
                }}
            >
                Login
            </Button>
        )
    }

    handleLoginButton = () => {
        this.props.loginButtonRoute()
    }

    profileButton = () => {
        return (
            <Button
                onClick={this.handleProfileButton}
                style={{
                    color: "rgb(65, 118, 115)",
                    marginRight: "4px",
                    backgroundColor: "white",
                    padding: "8px"
                }}
            > 
                Profile
            </Button>
        )
    }

    handleProfileButton = () => {
        this.props.profileButtonRoute()
    }

    logoutButton = () => {
        return (
            <Button
                onClick={this.handleLogoutButton}
                style={{
                    color: "rgb(65, 118, 115)",
                    backgroundColor: "white",
                    padding: "8px"
                }}
            >
                Logout
            </Button>
        )
    }

    handleLogoutButton = () => {
        this.props.userLogout()
    }

    registerButton = () => {
        return (
            <Button
                onClick={this.handleRegisterButton}
                style={{
                    color: "rgb(65, 118, 115)",
                    backgroundColor: "white",
                    padding: "8px"
                }}
            >
                Register
            </Button>
        )
    }

    handleRegisterButton = () => {
        this.props.registerButtonRoute()
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
                        alt='Kwitter Logo'
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
                    marginRight: "18em",
                }}>
                    <Grid.Column>
                        <Switch>
                            <Route exact path='/' component={this.registerButton}/>
                            <Route exact path='/register' component={this.loginButton}/>
                            <Route path='*' component={this.logoutButton}/>
                        </Switch>
                    </Grid.Column>
                    <Grid.Column>
                        <Switch>
                            <Route path='/feed' component={this.editProfileButton}/>
                            <Route path='/home' component={this.editProfileButton}/>
                            <Route path='/edit' component={this.profileButton}/>
                        </Switch>
                    </Grid.Column>
                    <Grid.Column>
                        <Switch>
                            <Route exact path='/feed' component={this.profileButton}/>
                            <Route path='/home' component={this.feedButton}/>
                            <Route path='/edit' component={this.feedButton}/>
                        </Switch>
                    </Grid.Column>
                </Grid.Row>
            </div>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        feedButtonRoute: () => {
            dispatch(feedButtonRoute())
        },
        editProfileButtonRoute: () => {
            dispatch(editProfileButtonRoute())
        },
        loginButtonRoute: () => {
            dispatch(loginButtonRoute())
        },
        profileButtonRoute: () => {
            dispatch(profileButtonRoute())
        },
        userLogout: () => {
            dispatch(userLogout())
        },
        registerButtonRoute: () => {
            dispatch(registerButtonRoute())
        }
    }
}
  

export default connect(null,mapDispatchToProps)(Navbar)