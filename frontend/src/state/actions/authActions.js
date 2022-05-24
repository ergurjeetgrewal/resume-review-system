import { LOGIN_SUCCESS_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION, REFRESH_LOGIN_ACTION, BUTTON_LOADING_ACTION, LOCAL_STORE_LOAD } from "./authTypes";
import { login, runRefreshTimer, tokenRefresh } from '../../services/AuthService';

export function loginAction(user) {
    return (dispatch) => {
        login(user).then(response => {
            response.data['expireDate'] = new Date().getTime() + response.data.expiresIn * 1000;
            localStorage.setItem('data', JSON.stringify(response.data));
            runRefreshTimer(dispatch, response.data);
            dispatch(loginSuccessAction(response.data));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}


export function loginSuccessAction(user) {
    return {
        type: LOGIN_SUCCESS_ACTION,
        payload: user
    }
}

export function loginFailedAction(error) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: error
    }
}

export function logoutAction() {
    // eslint-disable-next-line
    localStorage.removeItem('data');
    return {
        type: LOGOUT_ACTION,
    }
}

export function refreshTokenAction() {
    return (dispatch, getState) => {
        const data = {
            refresh: getState().auth.auth.refreshtoken
        }
        if (data.refresh) {
            tokenRefresh(data).then(response => {
                runRefreshTimer(dispatch, getState().auth.auth);
                dispatch(refreshLoginAction(response.data));
            }).catch(error => {
                dispatch(logoutAction());
            })
        }
        else {
            //do nothing
        }
    }
}

export function refreshLoginAction(user) {
    return {
        type: REFRESH_LOGIN_ACTION,
        payload: user
    }
}

export function buttonLoadingAction(data) {
    return {
        type: BUTTON_LOADING_ACTION,
        payload: data
    }
}

export function localstorageLoad() {
    let data = localStorage.getItem('data');
    if (data) {
        data = JSON.parse(data);
    }else{
        data = {};
    }
    return {
        type: LOCAL_STORE_LOAD,
        payload: data
    }
}