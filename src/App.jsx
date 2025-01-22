import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastForm = () => {
  const [autoDismiss, setAutoDismiss] = useState(true);
  const [duration, setDuration] = useState(1);
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState("top-center");

  // Function to display the toast
  const showToast = (type) => {
    const toastOptions = {
      position,
      autoClose: autoDismiss ? duration * 1000 : false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    };

    switch (type) {
      case "success":
        toast.success(message, toastOptions);
        break;
      case "error":
        toast.error(message, toastOptions);
        break;
      case "warning":
        toast.warning(message, toastOptions);
        break;
      case "clear":
        toast.dismiss();
        break;
      default:
        toast.info("Invalid action", toastOptions);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-center text-teal-700 mb-4">
          Custom React Toast Package
        </h2>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="autoDismiss"
            checked={autoDismiss}
            onChange={() => setAutoDismiss(!autoDismiss)}
            className="mr-2 w-5 h-5 text-teal-600"
          />
          <label htmlFor="autoDismiss" className="text-teal-700 font-semibold">
            Auto-dismiss
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-1">Duration (in second)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full text-teal-700 font-semibold px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-teal-700 font-semibold mb-1">Toast message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="placeholder:text-teal-700  w-full text-teal-700 font-semibold px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-teal-700 font-semibold mb-1">Toast Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full text-teal-700 font-semibold px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="top-center" className="text-teal-700 font-semibold">Top Center</option>
            <option value="top-left" className="text-teal-700 font-semibold">Top Left</option>
            <option value="top-right" className="text-teal-700 font-semibold">Top Right</option>
            <option value="bottom-center" className="text-teal-700 font-semibold">Bottom Center</option>
            <option value="bottom-left" className="text-teal-700 font-semibold">Bottom Left</option>
            <option value="bottom-right" className="text-teal-700 font-semibold">Bottom Right</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-teal-700 text-white py-2 rounded-md hover:bg-green-700"
            onClick={() => showToast("success")}
          >
            Success Toast
          </button>
          <button
            className="bg-teal-700 text-white py-2 rounded-md hover:bg-red-700"
            onClick={() => showToast("error")}
          >
            Error Toast
          </button>
          <button
            className="bg-teal-700 text-white py-2 rounded-md hover:bg-yellow-600"
            onClick={() => showToast("warning")}
          >
            Warning Toast
          </button>
          <button
            className="bg-teal-700 text-white py-2 rounded-md hover:bg-gray-700"
            onClick={() => showToast("clear")}
          >
            Clear All Toast
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ToastForm;
