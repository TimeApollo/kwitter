export const POST_MESSAGE = "POST_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const LIKE_MESSAGE = "LIKE_MESSAGE";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const REGISTER_USER = "REGISTER_USER";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_USER = "GET_USER";
export const GET_MESSAGES = "GET_MESSAGES";

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

export const userLogin = id => {
    return {
        type: USER_LOGIN, 
        payload: {
            username,
            password
        }
    }
}

export const getUser = (token) => {
    return {
        type: GET_USER,
        payload: token
    }
}

export const userLogout = id => {
    return {
        type: USER_LOGOUT, 
        payload: userId
    }
}

//register user will (probably) be stored locally 
// export const registerUser = (username, password, displayName) => {
//     return {
//         type: REGISTER_USER, 
//         payload: {
//             username, 
//             password, 
//             displayName
//         }
//     }
// }

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