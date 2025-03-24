// // Toast.jsx
// import React from 'react';

// const Toast = ({ message, isVisible }) => {
//   return (
//     <div
//       className={`fixed top-20 right-0 z-10  p-4 bg-green-600 text-white rounded-s-xl shadow-lg transition-opacity duration-300 ${
//         isVisible ? 'opacity-100' : 'opacity-0'
//       }`}
//     >
//       {message}
//     </div>
//   );
// };

// export default Toast;




import { toast } from 'react-toastify';
import styles from './Toast.module.css';

const Toast = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: styles.customToast,
    });
};

export default Toast;



