import { BUTTON_LOADING_ACTION, LOCAL_STORE_LOAD, LOGIN_FAILED_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, REFRESH_LOGIN_ACTION } from "../actions/authTypes";
import { RESUME_CREATE_FAILED, RESUME_CREATE_SUCCESS, RESUME_UPDATE_FAILED, RESUME_UPDATE_SUCCESS } from "../actions/resumeTypes";


const initialState = {
    auth: {
        "token": '',
    },
    errorMessage: '',
    successMessage: '',
    isAuthenticated: false,
    buttonloading: false,
    emailverification: '',
}

export default function UserAuth(state = initialState, action) {
    if (action.type === LOGIN_SUCCESS_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successful',
            isAuthenticated: true,
            buttonloading: false,
        }
    }
    if (action.type === LOGIN_FAILED_ACTION || action.type === RESUME_UPDATE_FAILED || action.type === RESUME_CREATE_FAILED) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            buttonloading: false,
        }
    }
    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            auth: {
                token: '',
            },
            errorMessage: '',
            successMessage: '',
            isAuthenticated: false,
            buttonloading: false,
        }
    }
    if (action.type === REFRESH_LOGIN_ACTION) {
        const auth = { ...state.auth };
        auth['token'] = action.payload['access'];
        auth['expireDate'] = new Date().getTime() + 3600 * 1000;
        return {
            ...state,
            auth,
        };
    }
    if (action.type === BUTTON_LOADING_ACTION) {
        return {
            ...state,
            buttonloading: action.payload,
        }
    }
    if (action.type === LOCAL_STORE_LOAD) {
        let nowtime = new Date().getTime();
        if (action.payload.expireDate > nowtime) {
            return {
                ...state,
                auth: action.payload,
                isAuthenticated: true,
            }
        }
        return state;
    }
    if (action.type === RESUME_UPDATE_SUCCESS || action.type === RESUME_CREATE_SUCCESS) {
        return {
            ...state,
            successMessage: 'Resume Updated Successfully',
            buttonloading: false,
        }
    }

    return state;
}
