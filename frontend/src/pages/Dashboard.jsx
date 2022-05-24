/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { resumeactionCreators } from "../state";

function Dashboard() {
    const resumes = useSelector(state => state.resumes.resumes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loadResumesList, loadResume } = bindActionCreators(resumeactionCreators, dispatch)
    const onHandleresume = (resume) => {
        loadResume({id:resume.id}, navigate);
    }
    useEffect(() => {
        loadResumesList()
    }, [])

    return (
        <>
            <div>
                <div className="sm:px-6 w-full">
                    <div className="px-4 md:px-10 py-4 md:py-7">
                        <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Applications</p>
                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="sm:flex items-center justify-between">
                            <Link to='/addnewcandidate'>
                                <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                    <p className="text-sm font-medium leading-none text-white">New Candidate</p>
                                </button>
                            </Link>
                        </div>
                        <div className="mt-7 overflow-x-auto">
                            {!resumes.length && <p className="text-center text-gray-600">No Resumes</p>}
                            <table className="w-full whitespace-nowrap">
                                <tbody>
                                    {resumes.map((resume, index) => {
                                        return <tr className="h-16 border border-gray-100 rounded" key={resume.id}>
                                            <td>
                                                <button className="" onClick={() => { onHandleresume(resume) }} disabled={resume.status === 'accepted' || resume.status === 'rejected'}>
                                                    <div className="flex items-center pl-5">
                                                        <p className="text-base font-medium leading-none hover:text-blue-800 hover:cursor-pointer text-gray-700 mr-2">{resume.name}</p>
                                                    </div>
                                                </button>
                                            </td>
                                            <td className="pl-24">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                    </svg>
                                                    <p className="text-sm leading-none text-gray-600 ml-2">{resume.mobile}</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                                    </svg>
                                                    <p className="text-sm leading-none text-gray-600 ml-2">{resume.date}</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className={`py-3 px-3 text-sm focus:outline-none leading-none ${resume.status === 'applied' ? 'text-orange-800 bg-orange-200 hover:bg-orange-400' : resume.status === 'rejected' ? 'text-red-800 bg-red-200 hover:bg-red-400' : 'text-green-800 bg-green-200 hover:bg-green-400'} rounded`}>{resume.status}</button>
                                            </td>
                                            <td className="pl-4">
                                                <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none" onClick={() => { onHandleresume(resume) }} disabled={resume.status === 'accepted' || resume.status === 'rejected'}>View</button>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Dashboard;
