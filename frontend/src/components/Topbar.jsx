
export default function Topbar(props) {
    const { show, setShow } = props;
    return (
        <>
            <div className=" bg-indigo-700 sticky top-0 z-50">
                <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
                    {/* For large and Medium-sized Screen */}
                    <div className="flex justify-between ">
                        <div className="hidden sm:flex flex-row items-center space-x-6">
                        </div>
                        <div className="flex space-x-3 items-center" >
                            <img src="" alt="" />
                            <h1 className=" font-normal text-2xl leading-6 text-white">Application Review System</h1>
                        </div>
                        <div className="hidden sm:flex flex-row space-x-4">

                        </div>
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={() => setShow(!show)} className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}>
                            <svg className={`${show ? 'hidden' : ''} text-white `} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className=" transform duration-150" d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className=" transform duration-150" d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`${show ? 'block' : 'hidden'} text-white `} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {/* Mobile and small-screen devices (toggle Menu) */}
                    <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 mx-auto`}>
                        <div className="flex flex-row items-center justify-center space-x-6">
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
