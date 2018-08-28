import {
  POST_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_SUCCESS,
  EDIT_PROFILE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  GET_USERS,
  GET_ONE_USER,
  GET_MESSAGES,
  GET_ONE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_LIKE_SUCCESS
} from "./action"

const initialState = {
  auth: {
    token: null,
    isLoginSuccess: false
  },
  messages: [],
  message: {},
  user:{},
  users:{},
  userID:null,
  isRegisterSuccess: false,
  isPasswordUpdated: false,
}

const kwitterReducer = ( state = initialState , action ) => {
  switch (action.type){
    case REGISTER_SUCCESS:
      console.log('i made it here')
      return {
        ...state,
        isRegisterSuccess: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userID:action.payload.userID,
        auth: {
          token: action.payload.token,
          isLoginSuccess: action.payload.isLoginSuccess,
        }
      }
    case USER_LOGOUT_SUCCESS:
      return {
        auth: {
          token: null,
          isLoginSuccess: false
        },
        messages: [],
        message: {},
        users: {},
        userID: null,
        isRegisterSuccess: false,
        isPasswordUpdated: false
      }
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      }
    case GET_ONE_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case GET_ONE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      }
    case POST_MESSAGE:
      const messageObj = action.payload.message;
      console.log(messageObj)
      messageObj['likes'] = []
      const newMessageArray = state.messages.slice()
      newMessageArray.unshift(messageObj)
      return {
        ...state,
        messages: newMessageArray
      }
    case DELETE_MESSAGE_SUCCESS:
      console.log(action.payload.messages)
      const newDeletedMessageArray = state.messages.filter(message => message.id !== action.payload.messages);
      return {
        ...state,
        messages: newDeletedMessageArray
      }
    case LIKE_MESSAGE:
      return {
        ...state
      }
    case DELETE_LIKE_SUCCESS:
      return {
        ...state
      }
    case EDIT_PROFILE:
      return {
        ...state,
        isPasswordUpdated: true
      }
    default:
      return state;
  }
}

export {kwitterReducer}