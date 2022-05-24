import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const Messager = () => {
    const errorMessage = useSelector(state => state.auth.errorMessage);
    const successMessage = useSelector(state => state.auth.successMessage);
    const notifyerror = (errorMessage) => toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notifysuccess = (successMessage) => toast.success(successMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    useEffect(() => {
        if (errorMessage) {
            notifyerror(errorMessage);
        }
        if (successMessage) {
            notifysuccess(successMessage);
        }
    }, [errorMessage, successMessage]);
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default Messager
