import React from 'react'
import { Button, Grid } from "semantic-ui-react"

class Navbar extends React.Component {
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
                padding: 9,
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
                    <Button>
                        Feed
                    </Button>

                </Grid.Column>
                <Grid.Column>
                    <Button> 
                        Edit Profile
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button> 
                        Logout
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </div>
    )}
}


export default (Navbar)