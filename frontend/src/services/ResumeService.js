import axios from "./AxiosInstance";

export function fetchresumelist(){
    return axios.get(`${process.env.REACT_APP_HOST_URL_LINK}/resumeapp/`);
}

export function updateresume(data){
    return axios.put(`${process.env.REACT_APP_HOST_URL_LINK}/resumeapp/resume/`,data);
}

export function createresume(data){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/resumeapp/`,data);
}

export function fetchresume(data){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/resumeapp/resume/`,data);
}