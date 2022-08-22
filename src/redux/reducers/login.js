import { loginActions } from "../actions/login";


const initialState = {
     userData : { },
     newToken : { },
};

export const login = (state = initialState, action) => {
     switch(action.type) {
          case loginActions.RECEIVE_USER_AUTH:
               return {
                    ...state,
                    userData : action.payload
               };
          case loginActions.RECEIVE_REFRESH_TOKEN:
               return {
                    ...state,
                    newToken : action.payload
               };
          default:
               return state;     
     }
}