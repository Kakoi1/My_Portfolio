import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Toaster = ({ myPromise, pending, message ,error}) => {
  useEffect(() => {
    if (myPromise) {
      toast.promise(
        myPromise,
        {
          pending: pending || 'Processing...',
          success: message || 'Operation successful!',
          error: {
            render({ data }) {
              return `${error} ${data?.response?.statusText || data?.message || 'Unknown error'}`;
            },
          },
        },
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    }
  }, [myPromise, pending, message]); // Re-run when props change

  return <ToastContainer />;
};
export default Toaster