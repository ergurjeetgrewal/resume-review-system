/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { resumeactionCreators, authactionCreators } from "../state/index";


function Newresume() {
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const [resumeData, setEducationFormData] = useState();
    const [resumefile, setResumefile] = useState();
    const [educationNumber] = useState(0);
    const [educationArr, setEducationArr] = useState([]);
    const [educationData, setEducationData] = useState([]);
    const [skillsArr, setSkillsArr] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const [projectsArr, setProjectsArr] = useState([]);
    const [projectsData, setProjectsData] = useState([]);
    const [experienceArr, setExperienceArr] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const [certificateArr, setCertificateArr] = useState([]);
    const [certificateData, setCertificateData] = useState([]);
    const [showModaledu, setShowModaledu] = useState(false);
    const [showModalskills, setShowModalskills] = useState(false);
    const [showModalprojects, setModalprojects] = useState(false);
    const [showModalexperience, setModalexperience] = useState(false);
    const [showModalcertificate, setModalcertificate] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resumeCreateAction } = bindActionCreators(resumeactionCreators, dispatch);
    const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
    const onHandleSubmit = () => {
        const data = [];
        for (let edu of educationArr) {
            data.push({ 'education': edu })
        }
        for (let skill of skillsArr) {
            data.push({ 'skills': skill })
        }
        for (let project of projectsArr) {
            data.push({ 'projects': project })
        }
        for (let experience of experienceArr) {
            data.push({ 'experience': experience })
        }
        for (let certificate of certificateArr) {
            data.push({ 'certificate': certificate })
        }
        const uploadData = new FormData();
        for (let key in resumefile) {
            uploadData.append(key, resumefile[key]);
        }
        for (let key in resumeData) {
            uploadData.append(key, resumeData[key]);
        }
        uploadData.append('data', JSON.stringify(data));
        buttonLoadingAction(true);
        resumeCreateAction(uploadData, navigate);
    }
    let button = <button type="button" className="bg-blue-500 rounded hover:bg-blue-800 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-black border lg:max-w-[95px]  w-full" onClick={onHandleSubmit}>
        Submit
    </button>;

    if (buttonloading) {
        button = <div className="flex justify-center items-center" >
            <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>
    }

    const onHandleChange = (e) => {
        setEducationFormData({ ...resumeData, [e.target.name]: e.target.value })
    }


    const addNewEducation = () => {
        setEducationArr([...educationArr, educationData])
        setEducationData({})
        setShowModaledu(false)
    }

    const addNewSkill = () => {
        setSkillsArr([...skillsArr, skillsData])
        setSkillsData({})
        setShowModalskills(false)
    }
    const addNewProject = () => {
        setProjectsArr([...projectsArr, projectsData])
        setProjectsData({})
        setModalprojects(false)
    }
    const addNewExperience = () => {
        setExperienceArr([...experienceArr, experienceData])
        setExperienceData({})
        setModalexperience(false)
    }
    const addNewCertificate = () => {
        setCertificateArr([...certificateArr, certificateData])
        setCertificateData({})
        setModalcertificate(false)
    }
    return (
        <>
            {showModaledu ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New Education Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModaledu(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <div className="education-box">
                                        <div className="mb-4 educationClonedEmptyDiv" id={`edu_`} key={educationNumber}>
                                            <div className="row">
                                                <input type="text" placeholder="Course Name" name={`courseName`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="row">
                                                <input type="text" placeholder="Institute Name" name={`instituteName`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="duration-div row">
                                                <label htmlFor="" className="pr-4">Duration: </label>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`courseStartMonth`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`courseStartYear`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <span className="m-3">-</span>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`courseEndMonth`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`courseEndYear`} onChange={e => setEducationData({ ...educationData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setEducationData({})
                                            setShowModaledu(false)
                                        }
                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addNewEducation()}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showModalskills ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New Skill Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalskills(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <div className="education-box">
                                        <div className="mb-4 educationClonedEmptyDiv" id={`edu_`} key={educationNumber}>
                                            <div className="row">
                                                <input type="text" placeholder="Skill" name={`skill`} onChange={e => setSkillsData({ ...skillsData, [e.target.name]: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setSkillsData({})
                                            setShowModalskills(false)
                                        }
                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addNewSkill()}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showModalprojects ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New Project Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setModalprojects(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <div className="education-box">
                                        <div className="mb-4 educationClonedEmptyDiv" id={`edu_`} key={educationNumber}>
                                            <div className="row">
                                                <input type="text" placeholder="Project Name" name={`projectName`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="row">
                                                <input type="text" placeholder="Project Desc" name={`projectDesc`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="duration-div row">
                                                <label htmlFor="" className="pr-4">Duration: </label>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`projectStartMonth`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`projectStartYear`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <span className="m-3">-</span>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`projectEndMonth`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`projectEndYear`} onChange={e => setProjectsData({ ...projectsData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setProjectsData({})
                                            setModalprojects(false)
                                        }
                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addNewProject()}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showModalexperience ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New Experience Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setModalexperience(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="education-box">
                                        <div className="mb-4 educationClonedEmptyDiv" id={`edu_`} key={educationNumber}>
                                            <div className="row">
                                                <input type="text" placeholder="Title/Postion" name={`position`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="row">
                                                <input type="text" placeholder="Workplace/Company" name={`company`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="duration-div row">
                                                <label htmlFor="" className="pr-4">Duration: </label>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`companyStartMonth`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`companyStartYear`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <span className="m-3">-</span>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`companyEndMonth`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`companyEndYear`} onChange={e => setExperienceData({ ...experienceData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setExperienceData({})
                                            setModalexperience(false)
                                        }
                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addNewExperience()}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            {showModalcertificate ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Add New Certificate Detail
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setModalexperience(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="education-box">
                                        <div className="mb-4 educationClonedEmptyDiv" id={`edu_`} key={educationNumber}>
                                            <div className="row">
                                                <input type="text" placeholder="Certificate Name" name={`certificate`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="row">
                                                <input type="text" placeholder="Description" name={`desc`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                            </div>
                                            <div className="duration-div row">
                                                <label htmlFor="" className="pr-4">Duration: </label>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`StartMonth`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`StartYear`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <span className="m-3">-</span>
                                                <div className="row d-flex">
                                                    <input type="number" placeholder="mm" className="m-3" name={`EndMonth`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                                    <span>/</span>
                                                    <input type="number" placeholder="yyyy" className="m-3" name={`EndYear`} onChange={e => setCertificateData({ ...certificateData, [e.target.name]: e.target.value })} />
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setCertificateData({})
                                            setModalcertificate(false)
                                        }
                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => addNewCertificate()}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64 lg:w-full">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Email address <span className="text-red-500">*</span> </label>
                                        <input type="email" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="email" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Name <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="name" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >Phone number <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="mobile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Contact Info</h1>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64 lg:w-full">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Address <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="address" />
                                    </div>

                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">City <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="city" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >State <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="state" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Country <span className="text-red-500">*</span> </label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="country" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Pin Code <span className="text-red-500">*</span> </label>
                                        <input type="number" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="zip_code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Education</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    educationArr.length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Course</th>
                                                    <th>Institute</th>
                                                    <th>Duration</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    educationArr.map((education, key) =>
                                                        <tr key={key}>
                                                            <td>{education.courseName}</td>
                                                            <td>{education.instituteName}</td>
                                                            <td>{education.courseStartMonth}/{education.courseStartYear} - {education.courseEndMonth}/{education.courseEndYear}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    educationArr.splice(key, 1);
                                                                    setEducationArr([...educationArr]);
                                                                }}
                                                                    type="button" className="bg-red-500 rounded hover:bg-red-800 transform duration-300 ease-in-out text-sm font-medium px-4 py-2 text-white border">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : ""
                                }
                                <div className="add-new-education"> <div className="line"> </div><span onClick={() => setShowModaledu(true)}>+</span> <div className="line"></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Skills</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    skillsArr.length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Skills</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    skillsArr.map((skill, key) =>
                                                        <tr key={key}>
                                                            <td>{skill.skill}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    skillsArr.splice(key, 1);
                                                                    setSkillsArr([...skillsArr]);
                                                                }}
                                                                    type="button" className="bg-red-500 rounded hover:bg-red-800 transform duration-300 ease-in-out text-sm font-medium px-4 py-2 text-white border">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : ""
                                }
                                <div className="add-new-education"> <div className="line"> </div><span onClick={() => setShowModalskills(true)}>+</span> <div className="line"></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Projects</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    projectsArr.length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Project</th>
                                                    <th>Description</th>
                                                    <th>Duration</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    projectsArr.map((project, key) =>
                                                        <tr key={key}>
                                                            <td>{project.projectName}</td>
                                                            <td>{project.projectDesc}</td>
                                                            <td>{project.projectStartMonth}/{project.projectStartYear} - {project.projectEndMonth}/{project.projectEndYear}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    projectsArr.splice(key, 1);
                                                                    setProjectsArr([...projectsArr]);
                                                                }}
                                                                    type="button" className="bg-red-500 rounded hover:bg-red-800 transform duration-300 ease-in-out text-sm font-medium px-4 py-2 text-white border">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : ""
                                }
                                <div className="add-new-education"> <div className="line"> </div><span onClick={() => setModalprojects(true)}>+</span> <div className="line"></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Experience</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    experienceArr.length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Company</th>
                                                    <th>Tenure</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    experienceArr.map((job, key) =>
                                                        <tr key={key}>
                                                            <td>{job.position}</td>
                                                            <td>{job.company}</td>
                                                            <td>{job.companyStartMonth}/{job.companyStartYear} - {job.companyEndMonth}/{job.companyEndYear}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    experienceArr.splice(key, 1);
                                                                    setExperienceArr([...experienceArr]);
                                                                }}
                                                                    type="button" className="bg-red-500 rounded hover:bg-red-800 transform duration-300 ease-in-out text-sm font-medium px-4 py-2 text-white border">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : ""
                                }
                                <div className="add-new-education"> <div className="line"> </div><span onClick={() => setModalexperience(true)}>+</span> <div className="line"></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Certificate</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                {
                                    certificateArr.length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Certification</th>
                                                    <th>Institute</th>
                                                    <th>Duration</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    certificateArr.map((certificate, key) =>
                                                        <tr key={key}>
                                                            <td>{certificate.certificate}</td>
                                                            <td>{certificate.desc}</td>
                                                            <td>{certificate.StartMonth}/{certificate.StartYear} - {certificate.EndMonth}/{certificate.EndYear}</td>
                                                            <td>
                                                                <button onClick={() => {
                                                                    certificateArr.splice(key, 1);
                                                                    setCertificateArr([...certificateArr]);
                                                                }}
                                                                    type="button" className="bg-red-500 rounded hover:bg-red-800 transform duration-300 ease-in-out text-sm font-medium px-4 py-2 text-white border">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                    </svg>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : ""
                                }
                                <div className="add-new-education"> <div className="line"> </div><span onClick={() => setModalcertificate(true)}>+</span> <div className="line"></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Resume</h1>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Upload</label>
                                        <input type="file" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={(e) => { setResumefile({ ...resumefile, [e.target.name]: e.target.files[0] }) }} name="resume" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-center md:justify-center gap-x-4 gap-y-4 mt-2">
                        {button}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newresume;
