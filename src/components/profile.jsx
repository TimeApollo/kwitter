import React from 'react';
import Navbar from './navbar.jsx';

import { connect } from 'react-redux';
import { fetchUsers , fetchOneUser , fetchMessages } from './action'


class Profile extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
    this.props.fetchOneUser(this.props.userID);
    this.props.fetchMessages();
  }

  render(){
    return(
      <div className='profile'>
        <Navbar></Navbar>
      </div>
    )
  }
}

const mapStateToProps = ({auth, userID , user}) => ({
  auth,
  userID,
  user
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: ( limit , offset ) => {
      dispatch(fetchUsers( limit , offset ))
    },
    fetchOneUser: ( userID ) => {
      dispatch( fetchOneUser( userID ))
    },
    fetchMessages: () => {
      dispatch( fetchMessages())
    }
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(Profile)