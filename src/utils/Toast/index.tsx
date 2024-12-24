import { Bounce, toast, ToastContainer } from "react-toastify";

<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
/>

const ToastUtils = {
    success: (message: string): void => {
        toast.success(message);
    },
    error: (message: string): void => {
        toast.error(message);
    },
    warning: (message: string): void => {
        toast.warn(message);
    },
};

export default ToastUtils;
