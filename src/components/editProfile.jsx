import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const EditProfileForm = () => (
<div className='login-form'>
    <style> {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <nav style={{display: "flex", justifyContent: "center"}}>
      <img className="banner" src={require("../kwitterLogoFlare.png")}/>
    </nav>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src="logo.ico" />Change your password
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>
              Update
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default EditProfileForm