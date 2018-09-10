import { push } from 'connected-react-router';

export const POST_MESSAGE = "POST_MESSAGE";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const DELETE_LIKE_SUCCESS = "DELETE_LIKE_SUCCESS";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const IS_LOGGING_IN = "IS_LOGGING_IN";
export const ROUTING_TO_REGISTER_PAGE = "ROUTING_TO_REGISTER_PAGE";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const IS_EDITING = "IS_EDITING";
export const GET_USERS = "GET_USERS";
export const GET_ONE_USER = "GET_ONE_USER";
export const GET_MESSAGES = "GET_MESSAGES";
export const GET_ONE_MESSAGE = "GET_ONE_MESSAGE"
export const REGISTER_SUCCESS = 'REGISTER_COMPLETE';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const IS_REGISTERING = 'IS_REGISTERING';
export const ROUTING_TO_LOGIN = 'ROUTING_TO_LOGIN';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

const api = 'https://fast-basin-65577.herokuapp.com'

export const registerUser = (username, password, displayName) => (dispatch) => {
  dispatch(isRegistering())
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
      if( registerResponse.hasOwnProperty('errors')) {
        dispatch(registerFail())
      }else {
        dispatch(registerSuccess(registerResponse.username,registerResponse.displayName))
        dispatch(push('/'))
      }
    })
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

export const isRegistering = () => {
  return {
    type: IS_REGISTERING,
  }
}

export const clickedLoginLink = () => {
  return {
    type: ROUTING_TO_LOGIN
  }
}

// pass in form input / input from page into the username/password instead of hardcoding 
export const userLogin = (username , password) => (dispatch) => {
   //this is for testing
//    username = 'TimeApollo45'
//    password = 'TimeApollo45'
//    //
  dispatch(isLoggingIn());
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
      if( loginResponse.success ){
        dispatch(userLoginSuccess(loginResponse.token,loginResponse.success, loginResponse.id))
        dispatch(push('/home'))
      }else{
        dispatch(userLoginFail())
      }
    }).catch(error => dispatch(userLoginFail()))
  
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

export const isLoggingIn = () => {
  return {
    type: IS_LOGGING_IN
  }
}

export const clickedRegisterLink = () => {
  return {
    type: ROUTING_TO_REGISTER_PAGE
  }
}

export const userLogout = () => (dispatch) => {

  let header = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  }

  fetch(`${api}/auth/logout`,header)
    .then(response => response.json())
    .then(logout => {
      dispatch(userLogoutSuccess(logout.success))
      dispatch(push('/'))
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
    getUserAPI = `${api}/users?limit=1000`
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
  if(!userId) return
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
  fetch(`${api}/messages?limit=10000`)
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

export const postMessageProfile = (token,text,userID) => (dispatch) => {
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
      dispatch(fetchOneUser(userID))
    })
}

export const postMessageFeed = (token,text) => (dispatch) => {
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
      dispatch(fetchMessages())
    })
}
//needs to hit text and user id, message id will be created when posted
export const postMessageSuccess = (message) => {
    return {
        type: POST_MESSAGE,
        payload: message
    }
}

export const deleteMessageFeed = (token, messageId) => dispatch => {

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
      dispatch(fetchMessages())
    })
}

export const deleteMessageProfile = (token, messageId , userID) => dispatch => {

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
      dispatch(deleteMessageSuccess(delResponse))
      dispatch(fetchOneUser(userID))
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
  
  return fetch(`${api}/likes/`,header)
    .then(response => response.json())
    .then(likeObj => {
      dispatch(likeMessageSuccess(likeObj))
      return likeObj.like.id
    })
}

export const likeMessageFeed = (userId,messageId,token) => dispatch => {
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
      dispatch(fetchMessages())
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
      dispatch(deleteLikeSuccess())
    })
}

export const deleteLikeSuccess = () => {
  return {
    type: DELETE_LIKE_SUCCESS,
  }
}

export const editProfile = (password, token, displayName, about) => (dispatch) => {
  dispatch(isEditing())

  let changes = {}
  if (password) changes["password"] = password
  if (displayName) changes["displayName"] = displayName
  if (about) changes["about"] = about

  const header = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  }
  fetch(`${api}/users`, header)
    .then(response => response.json())
    .then(users => {
      dispatch(updatePasswordSuccess(users))
  })
}

export const isEditing = () => {
  return {
    type: IS_EDITING,
  }
}

export const updatePasswordSuccess = (users) => {
    return {
        type: EDIT_PROFILE,
        payload: users
    }
}

export const deleteUser = (token) => dispatch => {
  const header = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  fetch(`${api}/users`, header)
    .then(response => response.json())
    .then(isDeleted => {
      console.log(isDeleted)
      dispatch(userDeletedSuccess())
      dispatch(push("/"))
    })
}

export const userDeletedSuccess = () => {
  return {
    type:  DELETE_USER_SUCCESS
  }
}

export const feedButtonRoute = () => (dispatch) => {
  dispatch(push('/feed'))
}

export const editProfileButtonRoute = () => (dispatch) => {
  dispatch(push('/edit'))
}

export const loginButtonRoute = () => (dispatch) => {
  dispatch(push('/'))
}

export const profileButtonRoute = () => (dispatch) => {
  dispatch(push('/home'))
}

export const registerButtonRoute = () => (dispatch) => {
  dispatch(push('/register'))
}

