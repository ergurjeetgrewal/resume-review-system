import { createresume, fetchresume, fetchresumelist, updateresume } from "../../services/ResumeService";
import { buttonLoadingAction } from "./authActions";
import { LOAD_RESUMES_LIST, RESUME_UPDATE_FAILED, RESUME_UPDATE_SUCCESS, RESUME_CREATE_FAILED, RESUME_CREATE_SUCCESS, LOAD_RESUME_DETAILS } from "./resumeTypes";

export function loadResumesList() {
    return (dispatch) => {
        fetchresumelist().then(response => {
            dispatch({
                type: LOAD_RESUMES_LIST,
                payload: response.data
            });
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: error.response.data.message
                    });
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function loadResume(data, navigate) {
    return (dispatch) => {
        fetchresume(data).then(response => {
            dispatch({
                type: LOAD_RESUME_DETAILS,
                payload: response.data
            });
            navigate('/application');
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: error.response.data.message
                    });
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function updateResumeAction(data, navigate) {
    return (dispatch) => {
        updateresume(data).then(response => {
            navigate('/');
            dispatch({
                type: RESUME_UPDATE_SUCCESS,
                payload: response.data
            });
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch({
                        type: RESUME_UPDATE_FAILED,
                        payload: error.response.data.message
                    });
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function resumeCreateAction(data, navigate) {
    return (dispatch) => {
        createresume(data).then(response => {
            navigate('/');
            dispatch({
                type: RESUME_CREATE_SUCCESS,
                payload: response.data
            });
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch({
                        type: RESUME_CREATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch({
                        type: RESUME_CREATE_FAILED,
                        payload: 'Something went wrong'
                    });
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch({
                        type: RESUME_CREATE_FAILED,
                        payload: error.response.data.message
                    });
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}
