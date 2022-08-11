import { loginActions } from "../actions/login";


const initialState = {
     userData : { }
};

export const login = (state = initialState, action) => {
     switch(action.type) {
          case loginActions.RECEIVE_USER_AUTH:
               return {
                    ...state,
                    userData : action.payload
               };
          case authActions.RECEIVE_USER_REGISTER:
               return {
                    ...state,
                    userData : action.payload
               };

          default:
               return state;     
     }
}