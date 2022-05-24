import { LOAD_RESUMES_LIST, LOAD_RESUME_DETAILS } from "../actions/resumeTypes";


const initialState = {
    resumes: [],
    resume: [],
    educationArr: [],
    is_resume: false
}

export default function Resumes(state = initialState, action) {
    if (action.type === LOAD_RESUMES_LIST) {
        return {
            ...state,
            resumes: action.payload
        }
    }
    if (action.type === LOAD_RESUME_DETAILS) {
        return {
            ...state,
            resume: action.payload,
            is_resume: true
        }
    }
    return state;
}
