export const POST_MESSAGE = "POST_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_USER = "GET_USER";
export const GET_MESSAGES = "GET_MESSAGES";
export const REGISTER_SUCCESS = 'REGISTER_COMPLETE';
export const REGISTER_FAIL = 'REGISTER_FAIL';

const api = 'https://kwitter-api.herokuapp.com/'

export const registerUser = (username, password, displayName) => (dispatch) => {
  //this is for testing
  username = 'TimeApollo45'
  password = 'TimeApollo45'
  displayName = 'TimeApollo45'
  //
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username":username,
      "password":password,
      "displayName":displayName
    })
  }
  fetch(`${api}auth/register`, header)
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

export const userLogin = (username , password) => {
  return {
      type: USER_LOGIN, 
      payload: {
          username,
          password
      }
  }
}

//needs to hit text and user id, message id will be created when posted
export const postMessage = (text, userId) => {
    return {
        type: POST_MESSAGE,
        payload: {
            userId,
            text
        }
    }
}

//needs to refer to user id and message id
export const deleteMessage = (userId, messageId) => {
    return {
        type: DELETE_MESSAGE, 
        payload: {
            userId, 
            messageId
        }
    }
}

// need to record user id and message id
export const likeMessage = (userId, messageId) => {
    return {
        type: LIKE_MESSAGE, 
        payload: {
            userId,
            messageId
        }
    }
}

export const sendGetUser = (token) => {
    return {
        type: GET_USER,
        payload: token
    }
}

export const receiveGetUser = (user) => {
  return {
      type: GET_USER,
      payload: user
  }
}

export const userLogout = (userId) => {
    return {
        type: USER_LOGOUT, 
        payload: userId
    }
}



export const editProfile = (password) => {
    return {
        type: EDIT_PROFILE,
        payload: password
    }
}

export const getMessages = (messageId, userId, text, createdAt, updatedAt) => {
    return {
        type: GET_MESSAGES,
        payload: {
            messageId, 
            userId,
            text,
            createdAt,
            updatedAt
        }
    }
}