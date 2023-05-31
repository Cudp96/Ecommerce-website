import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toasterConfig = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const ToastifySuccess = (message) => {
  toast.success("Added To Cart.", toasterConfig);
};

export const ToastifyError = (message) => {
  toast.error("Removed From Cart.", toasterConfig);
};
export const ToastifyClear = (message) => {
  toast.error("Cart Cleared.", toasterConfig);
};
