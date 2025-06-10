import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Typed from "typed.js";
import "react-toastify/dist/ReactToastify.css";

const RatingReminder = () => {
  const [hasRated, setHasRated] = useState(false);
  const el = useRef<HTMLSpanElement>(null);
  const [destroyTyping, setDestroyTyping] = useState(false);
  const typedInstance = useRef<Typed | null>(null);
  console.log(hasRated);

 const startTyping = () => {
    // Destroy previous instance if it exists
    if (destroyTyping) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      setDestroyTyping(false)
    }

    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        strings: ["Welcome! Please rate my portfolio. Your feedback matters!"],
        typeSpeed: 10,
        backSpeed: 0,
        showCursor: true,
        cursorChar: '',
        onComplete: () => {
          // Callback when typing completes
        }
      });
    }
  };

  useEffect(() => {
    const rated = localStorage.getItem("portfolioRated");
    if (rated === "true") {
      setHasRated(true);
    }
  }, []);

  useEffect(() => {
    if (hasRated) return;

    const interval = setInterval(() => {
        setDestroyTyping(true);
        startTyping();
      const toastId = toast.info(
        <div className="p-2">
          <span className="" ref={el} />
          <div className="flex gap-2 mt-3" id="rating-buttons">
            <button
              onClick={() => handleRating("rated")}
              className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Rate Now
            </button>
            <button
              onClick={() => handleRating("dismissed")}
              className="px-3 py-1 bg-gray-500 rounded hover:bg-gray-600"
            >
              Maybe Later
            </button>
          </div>
        </div>,
        {
          autoClose: 10000,
          closeOnClick: false,
          pauseOnHover: true,
          position: "bottom-right",
        }
      );
      return () => toast.dismiss(toastId);
    }, 1000);

    return () => clearInterval(interval);
  }, [hasRated]);

  const handleRating = (action: "rated" | "dismissed") => {
    if (action === "rated") {
      localStorage.setItem("portfolioRated", "true");
      setHasRated(true);
      toast.success("Thank you for your rating! ❤️", {
        autoClose: 3000,
      });
    }
    toast.dismiss();
  };

  return (
    <ToastContainer
      newestOnTop
      limit={1}
      theme="colored"
      pauseOnFocusLoss={false}
    />
  );
};

export default RatingReminder;
