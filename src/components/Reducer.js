import {
  POST_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_SUCCESS,
  EDIT_PROFILE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  IS_REGISTERING,
  ROUTING_TO_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  IS_LOGGING_IN,
  ROUTING_TO_REGISTER_PAGE,
  GET_USERS,
  GET_ONE_USER,
  GET_MESSAGES,
  GET_ONE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_LIKE_SUCCESS,
  DELETE_USER_SUCCESS
} from "./action"

const initialState = {
  auth: {
    token: null,
    isLoginSuccess: false,
    isLoginFail: false,
    isLoggingIn: false,
  },
  messages: [],
  message: {},
  user:{},
  users:{},
  userID:null,
  register:{
    isRegisterSuccess: false,
    isRegisterFail: false,
    isRegisteringUser: false,
  },
  isPasswordUpdated: false,
}

const kwitterReducer = ( state = initialState , action ) => {
  switch (action.type){
    case REGISTER_SUCCESS:
      return {
        ...state,
        register:{
          ...state.register,
          isRegisterSuccess: true,
          isRegisterFail: false,
          isRegisteringUser: false,
        }
      }
    case REGISTER_FAIL:
      return {
        ...state,
        register:{
          ...state.register,
          isRegisterSuccess: false,
          isRegisterFail: true,
          isRegisteringUser: false,
        }
      }
    case IS_REGISTERING:
      return {
        ...state,
        register:{
          ...state.register,
          isRegisteringUser: true,
        }
      }
    case ROUTING_TO_LOGIN:
      return {
        ...state,
        register:{
          isRegisterSuccess: false,
          isRegisterFail: false,
          isRegisteringUser: false,
        }
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userID:action.payload.userID,
        auth: {
          token: action.payload.token,
          isLoginSuccess: true,
          isLoginFail: false,
          isLoggingIn: false,
        }
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoginSuccess: false,
          isLoginFail: true,
          isLoggingIn: false,
        }
      }
    case IS_LOGGING_IN:
      return {
        ...state,
        register:{
          ...state.register,
          isRegisterSuccess: false,
        },
        auth: {
          ...state.auth,
          isLoginSuccess: false,
          isLoginFail: false,
          isLoggingIn: true,
        }
      }
    case ROUTING_TO_REGISTER_PAGE:
      return {
        ...state,
        auth: {
          token: null,
          isLoginSuccess: false,
          isLoginFail: false,
          isLoggingIn: false,
        }
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        auth: {
          token: null,
          isLoginSuccess: false,
          isLoginFail: false,
          isLoggingIn: false,
        },
        messages: [],
        message: {},
        user:{},
        users:{},
        userID:null,
        register:{
          isRegisterSuccess: false,
          isRegisterFail: false,
          isRegisteringUser: false,
        },
        isPasswordUpdated: false,
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
      return {
        ...state,
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
    case DELETE_USER_SUCCESS:
      return {
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
    default:
      return state;
  }
}

export {kwitterReducer}