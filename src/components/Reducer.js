import {
  POST_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGIN,
  USER_LOGOUT,
  REGISTER_USER,
  EDIT_PROFILE,
  REGISTER_COMPLETE
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
  switch (action.type){
    case REGISTER_COMPLETE:
      return state;
    case REGISTER_USER:
      return state;
    default:
      return state;
  }
}

export {kwitterReducer}