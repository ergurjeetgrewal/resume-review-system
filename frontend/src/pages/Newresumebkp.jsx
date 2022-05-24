/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { resumeactionCreators, authactionCreators } from "../state/index";


function Newresume() {
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const [resumeData, setResumeData] = useState()
    const [resumefile, setResumefile] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { resumeCreateAction } = bindActionCreators(resumeactionCreators, dispatch);
    const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
    const onHandleSubmit = () => {
        const uploadData = new FormData();
        for (let key in resumefile) {
            uploadData.append(key, resumefile[key]);
        }
        for (let key in resumeData) {
            uploadData.append(key, resumeData[key]);
        }
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
        setResumeData({ ...resumeData, [e.target.name]: e.target.value })
    }
    return (
        <>
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
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Name</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="name" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                        <input type="email" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="email" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
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
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Address</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="address" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">City</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="city" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Pin Code</label>
                                        <input type="number" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="zip_code" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >State</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="state" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Country</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="country" />
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
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Education Info</label>
                                        <textarea tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="education" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:px-24">
                        <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div className="w-80">
                                <div className="flex items-center">
                                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Skills, Experience, Etc.</h1>
                                </div>
                            </div>
                            <div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Skills</label>
                                        <textarea type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="skills" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Projects</label>
                                        <textarea type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="projects" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName">Experience</label>
                                        <textarea type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="experience" />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="firstName">Certificates</label>
                                        <textarea type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" onChange={onHandleChange} name="certification" />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="firstName">Resume</label>
                                        <input onChange={(e) => { setResumefile({ ...resumefile, [e.target.name]: e.target.files[0] }) }} name="resume" type="file" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" />
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
