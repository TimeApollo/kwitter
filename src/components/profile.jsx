import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar.jsx';

class Profile extends React.Component{


  render(){
    return(
      <div className='profile'>
        <Navbar></Navbar>
      </div>
    )
  }
}

export default connect(undefined , undefined)(Profile)