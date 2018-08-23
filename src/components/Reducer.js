import {
  POST_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGIN,
  USER_LOGOUT,
  REGISTER_USER,
  EDIT_PROFILE
} from "./action"

const initialState = {
  auth: {
    token: null,
    success: false
  },
  messages: [],
  user:{},
  isRegisterSuccess: false
}

const kwitterReducer = ( state = initialState , action ) => {
  return state;
}

export {kwitterReducer}