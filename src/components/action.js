export const POST_MESSAGE = "POST_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const REGISTER_USER = "REGISTER_USER";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_USER = "GET_USER";
export const GET_MESSAGES = "GET_MESSAGES";
export const REGISTER_COMPLETE = 'REGISTER_COMPLETE'

const api = 'https://kwitter-api.herokuapp.com/'

//register user will (probably) be stored locally 
export const registerUser = (username, password, displayName) => (dispatch) => {
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
      dispatch(registerComplete(registerResponse.username,registerResponse.displayName))
    })
}

export const registerComplete = (userName, displayName) => {
  return {
    type: REGISTER_COMPLETE,
    payload: {
      userName,
      displayName
    },
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

export const userLogin = (username , password) => {
    return {
        type: USER_LOGIN, 
        payload: {
            username,
            password
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