import {
  POST_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGIN,
  USER_LOGOUT,
  EDIT_PROFILE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGIN_SUCCESS
} from "./action"

const initialState = {
  auth: {
    token: null,
    isLoginSuccess: false
  },
  messages: [],
  user:{},
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
    default:
      return state;
  }
}

export {kwitterReducer}