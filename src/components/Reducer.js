import {
  POST_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
  USER_LOGIN,
  USER_LOGOUT,
  EDIT_PROFILE,
  REGISTER_SUCCESS,
  REGISTER_FAIL
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
    case REGISTER_SUCCESS:
      console.log('i made it here')
      return {
        ...state,
        isRegisterSuccess: true,
      }
    default:
      return state;
  }
}

export {kwitterReducer}