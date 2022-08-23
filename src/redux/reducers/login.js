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
          case loginActions.RECEIVE_REFRESH_TOKEN:
               return {
                    ...state,
                    userData: {
                         id: state.userData.id,
                         email: state.userData.email,
                         access_token: action.payload.access_token,
                         refresh_token: action.payload.refresh_token,
                         roles: state.userData.roles
                    }
               };
          default:
               return state;     
     }
}