import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Resume from "../components/Resume";

function Application() {
    const is_resume = useSelector(state => state.resumes.is_resume);
    const resume = useSelector(state => state.resumes.resume);
    const navigate = useNavigate();
    useEffect(() => {
        if (!is_resume) {
            navigate("/");
        }
    }, [navigate, is_resume]);
    return (
        <>
            {is_resume ? <Resume resume={resume} /> : null}
        </>
    );
}

export default Application;
