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
  GET_MESSAGES,
  GET_ONE_MESSAGE,
} from "./action"

const initialState = {
  auth: {
    token: null,
    isLoginSuccess: false
  },
  messages: [],
  message: {},
  users:{},
  userID:null,
  isRegisterSuccess: false,
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
        users:{},
        userID:null,
        isRegisterSuccess: false,
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
    case GET_ONE_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      }
    case POST_MESSAGE:
      const newMessageArray = state.messages.slice()
      newMessageArray.unshift(action.payload.message)
      return {
        ...state,
        messages: newMessageArray
      }
    default:
      return state;
  }
}

export {kwitterReducer}