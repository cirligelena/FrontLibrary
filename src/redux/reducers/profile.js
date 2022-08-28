import { profileActions } from "../actions/profile"

const initialState = {
    profileData : { }
}

export const userProfileData = (state = initialState, action) => {
    switch (action.type) {
        case profileActions.GET_PROFILE_DATA:
            return {
                ...state,
                profileData : action.payload
            }
        default:
            return state;    
    }
}