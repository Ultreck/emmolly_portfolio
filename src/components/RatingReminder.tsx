import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Typed from "typed.js";
import "react-toastify/dist/ReactToastify.css";
import RatingModal from "./RatingModal";

const RatingReminder = () => {
  const [hasRated, setHasRated] = useState(false);
  const el = useRef<HTMLSpanElement>(null);
  const [destroyTyping, setDestroyTyping] = useState(false);
  const typedInstance = useRef<Typed | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const toastIdRef = useRef<import("react-toastify").Id | null>(null);

  const startTyping = () => {
    // Destroy previous instance if it exists
    if (destroyTyping) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      setDestroyTyping(false);
    }

    if (el.current) {
      typedInstance.current = new Typed(el.current, {
        strings: ["Welcome! Please rate my portfolio. Your feedback matters!"],
        typeSpeed: 10,
        backSpeed: 0,
        showCursor: true,
        cursorChar: "",
        onComplete: () => {
          // Callback when typing completes
        },
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
    if (toastIdRef.current) {
      toast.update(toastIdRef.current, {
        autoClose: isOpened ? false : 10000,
        closeOnClick: false,
        pauseOnHover: isOpened ? true : false,
      });
    }
  }, [isOpened]);

  useEffect(() => {
    if (hasRated) return;

    const interval = setInterval(() => {
      setDestroyTyping(true);
      startTyping();
      toastIdRef.current = toast.info(
        <div className="p-2">
          <span className="" ref={el} />
          <div className="flex gap-3 mt-1" id="rating-buttons">
            <RatingModal setIsOpened={setIsOpened} />
            <button
              onClick={() => handleRating("dismissed")}
              className="px-2 py-1 bg-gray-500 rounded hover:bg-gray-600"
            >
              Maybe Later
            </button>
          </div>
        </div>,
        {
          autoClose: false,
          closeOnClick: false,
          pauseOnHover: true,
          position: "top-right",
          style: { width: "400px", background: "#3b82f6", },
          onClose: () => {
            toastIdRef.current = null;
          },
        }
      );
      return () => {
        if (toastIdRef.current) {
          toast.dismiss(toastIdRef.current);
        }
      };
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
