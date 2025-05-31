import { Avatar } from "@heroui/avatar";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const messages = [
  {
    from: "them",
    text: "Hey Emmanuel, I came across your portfolio. Really impressive work!",
  },
  { from: "me", text: "Hi! Thank you so much. I really appreciate that." },
  {
    from: "them",
    text: "We're currently looking for a full stack developer for a new SaaS project.",
  },
  { from: "me", text: "Sounds interesting. I'd love to hear more about it." },
  {
    from: "them",
    text: "The project involves building a dashboard with analytics and real-time chat.",
  },
  {
    from: "me",
    text: "That's right up my alley. I’ve worked on similar features before.",
  },
  {
    from: "them",
    text: "Great! We'd like to bring you on board. Are you available to start next week?",
  },
  {
    from: "me",
    text: "Yes, I’m available. Let’s discuss the scope and timelines.",
  },
  { from: "them", text: "Perfect. I’ll send over the brief and NDA shortly." },
  {
    from: "me",
    text: "Looking forward to it. Thanks again for the opportunity!",
  },
];
const PhoneTyping = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [shownMessages, setShownMessages] = useState<
  //   { from: string; text: string }[]
  // >([]);
  const [isTyping, setIsTyping] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (currentIndex >= messages.length) {
      // Wait a bit, then reset everything
      const resetTimeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 2000); // 2-second pause before restarting

      return () => clearTimeout(resetTimeout);
    }

    const message = messages[currentIndex];

    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    if (message.from === "them") {
      setIsTyping(true);
      const timeout = setTimeout(
        () => {
          setIsTyping(false);
          startTyping(message.text);
        },
        1000 + message.text.length * 20
      );
      return () => clearTimeout(timeout);
    } else {
      startTyping(message.text);
    }
  }, [currentIndex]);

  const startTyping = (text: string) => {
    if (!typedRef.current) return;

    // Clear the container before typing
    typedRef.current.innerHTML = "";

    typedInstance.current = new Typed(typedRef.current, {
      strings: [text],
      typeSpeed: 50,
      showCursor: false,
      onComplete: () => {
        // setShownMessages((prev) => [...prev, messages[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      },
    });
  };

  // const bottomRef = useRef<HTMLDivElement | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
    if (chatBodyRef.current) {
      // Scroll to bottom smoothly
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
   useEffect(() => {
    scrollToBottom();
  }, [currentIndex, isTyping]);


  // Function for real-time clock
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[300px] h-[512px] dark:bg-white bg-slate-700 rounded-[2.5rem] shadow-xl border-4 border-gray-300 flex flex-col overflow-hidden">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-500 dark:bg-white bg-slate-700 border-b">
          <span className="text-white dark:text-black">{currentTime}</span>
          <div className="flex items-center gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Header */}
        <div className="dark:bg-white bg-slate-700 px-4 py-3 border-b text-center font-semibold text-white dark:text-gray-800">
           <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" /> John
        </div>

        {/* Chat Body (scrollable) */}
        <div
        ref={chatBodyRef}
          className="flex-1 overflow-y-auto pb-20 no-scrollbar  p-6 dark:bg-gray-100 bg-slate-700 text-sm font-sans space-y-4"
        >
          {messages.slice(0, currentIndex).map((msg, i) => (
            <div
              key={i}
              className={`max-w-[250px] w-[200px] px-4 py-2 rounded-xl ${
                msg.from === "me"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}

         {isTyping && (
            <div className="bg-white rounded-xl px-4 py-2 inline-block text-gray-500 w-fit">
              <div className="flex space-x-1 items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {currentIndex < messages.length && (
            <div
              className={`max-w-[250px] w-[200px] ${isTyping ? "hidden" : "px-4 py-2"} rounded-xl whitespace-pre-wrap ${
                messages[currentIndex].from === "me"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              <span ref={typedRef} />
            </div>
          )}

          {/* <div ref={bottomRef} /> */}
        </div>

        {/* Footer */}
        <div className="p-3 dark:bg-white bg-slate-700 border-t flex items-center gap-2">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none"
            disabled
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneTyping;
