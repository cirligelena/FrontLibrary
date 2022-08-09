import { authActions } from "../actions/auth";


const initialState = {
     userData : { }
};

export const auth = (state = initialState, action) => {
     switch(action.type) {
          case authActions.RECEIVE_USER_AUTH:
               return {
                    ...state,
                    userData : action.payload
               };
          default:
               return state;     
     }
}