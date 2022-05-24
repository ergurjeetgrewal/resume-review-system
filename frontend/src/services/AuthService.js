import axios from "axios";
import { refreshTokenAction } from "../state/actions/authActions";


export function login(user) {
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/login/`, user)
}

export function tokenRefresh(refreshtoken){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/token/refresh/`,refreshtoken)
}


export function runRefreshTimer(dispatch,userState) {
    setTimeout(() => {
        dispatch(refreshTokenAction());
    }, userState.expiresIn*1000);
}