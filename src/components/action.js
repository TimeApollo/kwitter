export const POST_MESSAGE = "POST_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const DELETE_LIKE_SUCCESS = "DELETE_LIKE_SUCCESS";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_USERS = "GET_USERS";
export const GET_ONE_USER = "GET_ONE_USER";
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_ONE_MESSAGE = "GET_ONE_MESSAGE"
export const REGISTER_SUCCESS = 'REGISTER_COMPLETE';
export const REGISTER_FAIL = 'REGISTER_FAIL';

const api = 'https://kwitter-api.herokuapp.com'

export const registerUser = (username, password, displayName) => (dispatch) => {

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "displayName": displayName,
    })
  }
  fetch(`${api}/auth/register`, header)
    .then(response => response.json())
    .then(registerResponse => {
      console.log(registerResponse)
      dispatch(registerSuccess(registerResponse.username,registerResponse.displayName))
    }).catch(error => dispatch(registerFail()))
}

export const registerSuccess = (userName, displayName) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      userName,
      displayName
    },
  }
}

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
  }
}


// pass in form input / input from page into the username/password instead of hardcoding 
export const userLogin = (username , password) => (dispatch) => {
   //this is for testing
//    username = 'TimeApollo45'
//    password = 'TimeApollo45'
//    //

  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username":username,
      "password":password,
    })
  }
  
  
  fetch(`${api}/auth/login`, header)
    .then(response => response.json())
    .then(loginResponse => {
        //add code to push to new URL after this fetch is completed so that it goes to profile page
      console.log(loginResponse)
      dispatch(userLoginSuccess(loginResponse.token,loginResponse.success, loginResponse.id))
    }).catch(error => dispatch(registerFail()))
  
}

export const userLoginSuccess = (token, success, userID) => {
  return {
    type: USER_LOGIN_SUCCESS, 
    payload: {
        token,
        isLoginSuccess: success,
        userID
    }
  }
}

export const userLoginFail = () => {
  return {
    type: USER_LOGIN_FAIL
  }
}

export const userLogout = () => (dispatch) => {
  fetch(`${api}/auth/logout`)
    .then(response => response.json())
    .then(logout => {
      console.log(logout)
      dispatch(userLogoutSuccess(logout.success))
    })
    .catch(logout => {
      dispatch(userLogoutFail(logout.success))
    })
}

export const userLogoutSuccess = (success) => {
  return {
      type: USER_LOGOUT_SUCCESS, 
      payload: success
  }
}

export const userLogoutFail = (success) => {
  return {
      type: USER_LOGOUT_FAIL, 
      payload: success
  }
}

export const fetchUsers = ( limit , offset ) => (dispatch) => {
  let getUserAPI = ``;
  if ( limit === undefined && offset === undefined ){
    getUserAPI = `${api}/users`
  }else{
    getUserAPI = `${api}/users?limit=${limit}&offset=${offset}`
  }
  fetch(getUserAPI)
    .then(response => response.json())
    .then(users => {
      dispatch(getUsers(users))       
    })
}

export const getUsers = (users) => {
  return {
      type: GET_USERS,
      payload: users
  }
}

export const fetchOneUser = (userId) => dispatch => {
  fetch(`${api}/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      dispatch(getOneUser(user))
    })
}

export const getOneUser = (user) => {
  return {
    type: GET_ONE_USER,
    payload: user
  }
}

export const fetchMessages = () => (dispatch) => {
  fetch(`${api}/messages`)
    .then(response => response.json())
    .then(messages => {
      dispatch(getMessages(messages))
    })
}

export const getMessages = (messages) => {
  return {
      type: GET_MESSAGES,
      payload: messages
  }
}

export const fetchOneMessage = (messageId) => (dispatch) => {
  fetch(`${api}/messages/${messageId}`)
    .then(response => response.json())
    .then(message => {
      dispatch(getOneMessage(message))
    })
}

export const getOneMessage = (message) => {
  return {
    type: GET_ONE_MESSAGE,
    payload: message
  }
}

export const postMessage = (token,text) => (dispatch) => {
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      "text":text,
    })
  }
  fetch(`${api}/messages`, header)
    .then(response => response.json())
    .then(message => {
      dispatch(postMessageSuccess(message))
    })
}

//needs to hit text and user id, message id will be created when posted
export const postMessageSuccess = (message) => {
    return {
        type: POST_MESSAGE,
        payload: message
    }
}

export const deleteMessage = (token, messageId) => dispatch => {

  const header = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }

  fetch(`${api}/messages/${messageId}`, header)
    .then(response => response.json())
    .then(delResponse => {
      console.log(delResponse)
      dispatch(deleteMessageSuccess(delResponse))
    })
}

//needs to refer to user id and message id
export const deleteMessageSuccess = (messages) => {
    return {
        type: DELETE_MESSAGE_SUCCESS, 
        payload: messages
    }
}

export const likeMessage = (userId,messageId,token) => dispatch => {
  const header = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
    body: JSON.stringify({
      "userId": userId,
      "messageId": messageId
    })
  }
  
  fetch(`${api}/likes/`,header)
    .then(response => response.json())
    .then(likeObj => {
      console.log(likeObj)
      dispatch(likeMessageSuccess(likeObj))
    })
}

// need to record user id and message id
export const likeMessageSuccess = (likeObj) => {
  return {
    type: LIKE_MESSAGE, 
    payload: likeObj
  }
}

export const deleteLike = ( token, likeId ) => dispatch => {
  const header = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }

  fetch(`${api}/likes/${likeId}`,header)
    .then(response => response.json())
    .then(like => {
      console.log(like)
      dispatch(deleteLikeSuccess())
    })
}

export const deleteLikeSuccess = () => {
  return {
    type: DELETE_LIKE_SUCCESS,
  }
}

export const editProfile = (password) => {
    return {
        type: EDIT_PROFILE,
        payload: password
    }
}

