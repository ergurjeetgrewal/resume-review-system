import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { authactionCreators } from "../state/index";


const Sidebar = (props) => {
    const { show } = props;
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const { logoutAction } = bindActionCreators(authactionCreators, dispatch)
    const onHandlelogout = () => {
        logoutAction();
    }
    return (
        <>
            <div id="Main" className={`md:h-screen md:sticky md:top-0 z-20 ${!show ? "-translate-x-full" : "translate-x-0"} transform  xl:translate-x-0 shadow xl:rounded-r fixed h-full top-22 sm:z-20 bg-indigo-700  ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 flex-col `}>
                <div className="   mt-4 flex flex-col justify-start items-center  px-4 w-full   ">
                    {isAuthenticated && <>
                        <Link to='/' className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded items-center space-x-6 w-full ">
                            <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded py-3  items-center space-x-6 w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                </svg>
                                <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white  ">Dashboard</p>
                            </button>
                        </Link>
                        <Link to='/addnewcandidate' className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded items-center w-full space-x-6">
                            <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded py-3 items-center w-full space-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                                </svg>
                                <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white ">Add new candidate</p>
                            </button>
                        </Link>
                    </>}
                    {!isAuthenticated && <>
                        <Link to='/' className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded items-center space-x-6 w-full ">
                            <button className="focus:outline-none focus:text-white  flex jusitfy-start   hover:text-white  text-indigo-200 rounded py-3  items-center space-x-6 w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white">Login</p>
                            </button>
                        </Link>
                    </>}
                </div>
                <div className="px-6 my-4 w-full">
                    <hr className="border-indigo-400  w-full" />
                </div>
                <div className="flex flex-col justify-start items-center px-4 w-full">
                    {isAuthenticated &&
                        <>
                            <button onClick={onHandlelogout} className="focus:outline-none focus:text-white  flex justify-start items-center space-x-6  hover:text-white   text-indigo-200 rounded  py-3    w-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>
                                <p className="text-base leading-4 border-b border-transparent  hover:border-white focus:border-white">Logout</p>
                            </button>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Sidebar;