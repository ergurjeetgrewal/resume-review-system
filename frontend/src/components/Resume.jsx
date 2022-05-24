/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { resumeactionCreators, authactionCreators } from "../state/index";
import PdfViewer from "./PdfViewer";

function Resume(props) {
    const { resume } = props;
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { updateResumeAction } = bindActionCreators(resumeactionCreators, dispatch);
    const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
    const onHandleSubmit = (data) => {
        buttonLoadingAction(true);
        updateResumeAction(data, navigate)
    }

    return (
        <>
            <div className="flex items-center justify-center">
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
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" disabled defaultValue={resume['resume'].name} />
                                    </div>
                                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                        <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" disabled defaultValue={resume['resume'].mobile} />
                                    </div>
                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="w-full">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                        <input type="email" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" disabled defaultValue={resume['resume'].email} />
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
                                <div className="md:flex items-center lg:ml-24">
                                    <div className="md:w-64 lg:w-full">
                                        <label className="text-sm leading-none text-gray-800" id="firstName" >Address</label>
                                        <input type="name" tabIndex="0" defaultValue={resume['resume'].address} disabled className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                                    </div>

                                </div>

                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">City</label>
                                        <input type="name" tabIndex="0" defaultValue={resume['resume'].city} disabled className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                    </div>
                                    <div className="md:w-64  md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="phone" >State</label>
                                        <input type="name" tabIndex="0" defaultValue={resume['resume'].state} disabled className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                    </div>

                                </div>
                                <div className="md:flex items-center lg:ml-24 mt-8">
                                    <div className="md:w-64">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Country</label>
                                        <input type="name" tabIndex="0" defaultValue={resume['resume'].country} disabled className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                    </div>
                                    <div className="md:w-64  md:ml-12 md:mt-0 mt-4">
                                        <label className="text-sm leading-none text-gray-800" id="emailAddress">Pin Code</label>
                                        <input type="name" tabIndex="0" defaultValue={resume['resume'].zip_code} disabled className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
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
                                    resume['education'].length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Course</th>
                                                    <th>Institute</th>
                                                    <th>Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resume['education'].map((education, key) =>
                                                        <tr key={key}>
                                                            <td>{education.courseName}</td>
                                                            <td>{education.instituteName}</td>
                                                            <td>{education.courseStartMonth}/{education.courseStartYear} - {education.courseEndMonth}/{education.courseEndYear}</td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : <h1 className="text-xl font-bold pr-2 leading-5 text-red-500">No Data Available</h1>
                                }
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
                                    resume['skill'].length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Skills</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {
                                                            resume['skill'].map((skill, key) => <>
                                                                {skill.skill} <span className="text-blue-800">|</span> &nbsp;
                                                            </>
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : <h1 className="text-xl font-bold pr-2 leading-5 text-red-500">No Data Available</h1>
                                }
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
                                    resume['project'].length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Project</th>
                                                    <th>Description</th>
                                                    <th>Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resume['project'].map((project, key) =>
                                                        <tr key={key}>
                                                            <td>{project.projectName}</td>
                                                            <td>{project.projectDesc}</td>
                                                            <td>{project.projectStartMonth}/{project.projectStartYear} - {project.projectEndMonth}/{project.projectEndYear}</td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : <h1 className="text-xl font-bold pr-2 leading-5 text-red-500">No Data Available</h1>
                                }
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
                                    resume['experience'].length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Company</th>
                                                    <th>Tenure</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resume['experience'].map((experience, key) =>
                                                        <tr key={key}>
                                                            <td>{experience.position}</td>
                                                            <td>{experience.company}</td>
                                                            <td>{experience.companyStartMonth}/{experience.companyStartYear} - {experience.companyEndMonth}/{experience.companyEndYear}</td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : <h1 className="text-xl font-bold pr-2 leading-5 text-red-500">No Data Available</h1>
                                }
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
                                    resume['certificate'].length !== 0 ? (
                                        <table className="educationList">
                                            <thead>
                                                <tr>
                                                    <th>Certificate</th>
                                                    <th>Description</th>
                                                    <th>Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    resume['certificate'].map((certificate, key) =>
                                                        <tr key={key}>
                                                            <td>{certificate.certificate}</td>
                                                            <td>{certificate.desc}</td>
                                                            <td>{certificate.StartMonth}/{certificate.StartYear} - {certificate.EndMonth}/{certificate.EndYear}</td>
                                                        </tr>
                                                    )
                                                }</tbody>
                                        </table>
                                    ) : <h1 className="text-xl font-bold pr-2 leading-5 text-red-500">No Data Available</h1>
                                }
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
                                <div className="md:flex">
                                    <div className="">
                                        <button onClick={() => {
                                            setShowModal(true);
                                            let body = document.getElementsByTagName('body')[0];
                                            body.style.overflow = 'hidden';
                                        }}
                                            className="bg-green-600 rounded hover:bg-green-800 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                                            View Resume
                                        </button>
                                    </div>
                                    <div className="ml-3">
                                        <a href={`${process.env.REACT_APP_HOST_URL_LINK}${resume['resume'].resume}`} target='_blank' rel="noreferrer"><button className="bg-green-600 rounded hover:bg-green-800 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                                            Download
                                        </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-center md:justify-center gap-x-4 gap-y-4 mt-2 mb-4 pt-4">
                        {!buttonloading ? <>
                            <button className="bg-red-300 rounded hover:bg-red-500 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-black border lg:max-w-[95px]  w-full" onClick={() => { onHandleSubmit({ 'status': 'rejected', 'id': resume['resume'].id }) }}>
                                Reject
                            </button>
                            <button className="bg-green-600 rounded hover:bg-green-800 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full" onClick={() => { onHandleSubmit({ 'status': 'accepted', 'id': resume['resume'].id }) }}>
                                Accept
                            </button>
                        </> :
                            <div className="flex justify-center items-center" >
                                <svg role="status" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <>
                {showModal ? (
                    <>
                        <div
                            className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pdfModel"
                            style={{ width: "54%", margin: "auto" }}
                        >
                            <div className="relative w-auto my-6 mx-auto">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Resume Preview
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => {
                                                setShowModal(false);
                                                let body = document.getElementsByTagName('body')[0];
                                                body.style.overflow = 'auto';
                                            }}
                                        >
                                            <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                x
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto" style={{ "overflowY": "auto" }}>
                                        <PdfViewer resume={`${process.env.REACT_APP_HOST_URL_LINK}${resume['resume'].resume}`} />
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowModal(false);
                                                let body = document.getElementsByTagName('body')[0];
                                                body.style.overflow = 'auto';
                                            }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}

            </>
        </>
    );
}

export default Resume;
