import React from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Divider, Checkbox, Card, Grid } from "semantic-ui-react";

class MessageComponent extends React.Component {

    render() {
        return (
        <Card fluid centered>
            <Icon name="user" size="large" />
            Display Name
                <Grid>
            <Grid.Row columns={2}>
              <Grid.Column textAlign="left">Likes:</Grid.Column>
              <Grid.Column textAlign="right"></Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider/>
          <footer>
            <Checkbox toggle style={{ float: 'left' }} />
            <Button>
              Delete
          </Button>
          </footer>
      </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
      "messages": state.messages
    }
  }
  
  
  export default connect(mapStateToProps , undefined)(MessageComponent)