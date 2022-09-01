import { loginActions } from "../actions/login";


const initialState = {
     userData : { },
     tokenValid : true
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
                    userData: {
                         id: state.userData.id,
                         email: state.userData.email,
                         access_token: action.payload.access_token,
                         refresh_token: action.payload.refresh_token,
                         roles: state.userData.roles
                    },
                    tokenValid : true
               };
          case loginActions.CHECK_ACCESS_TOKEN:
               return {
                    ...state,
                    tokenValid : action.payload
               };
          case loginActions.LOGOUT:
               return {
                    ...state,
                    userData : action.payload
               };
          default:
               return state;     
     }
}