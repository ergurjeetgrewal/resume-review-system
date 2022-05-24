import UserAuth from "./authReducer";
import Resumes from "./resumeReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    auth:UserAuth,
    resumes:Resumes
});

export default reducers;