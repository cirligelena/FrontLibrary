
export const flagActions = {
    RETRY_REGISTER_PROCESS: "RETRY_REGISTER_PROCESS"
    }

export const retryRegistration = () => (dispatch) => {
    return dispatch({
        type: flagActions.RETRY_REGISTER_PROCESS,
        payload: {},
    })
};