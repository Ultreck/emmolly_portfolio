import React, { useState } from "react";

const MacBookProMockup: React.FC<React.PropsWithChildren<{}>> = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-transparent">
      <div className="relative w-full h-[970px]">
        <div className="absolute top-0 w-full h-[75%] bg-gray-800 rounded-t-[40px] md:border-[12px] border-[6px] border-gray-900 dark:border-gray-700 border-b-0 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 m-2 bg-gray-900 rounded-t-[28px] overflow-hidden">
            {/* Screen Content - Replace with your content */}
            <div className="h-full dark:bg-gradient-to-br bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-blue-900 dark:to-[#EC4899]">
              <div className="text-center gap-5 md:p-10 p-3  grid grid-cols-1 md:grid-cols-3">
                <div className="text">
                  <h2 className="text-3xl sm:text-4xl font-semibold font-mono text-gray-900 dark:text-white mb-3 mt-7 md:mt-0">
                    Why hire me?
                  </h2>
                  <p className="text-start">
                    Full-stack proficiency meets creative problem-solving. I
                    bridge technical execution with strategic vision to deliver
                    exceptional digital products.
                  </p>
                  <div className="text md:mt-10 mt-5 gap-2 grid grid-cols-3 md:grid-cols-1 md:gap-10">
                    <button
                      onClick={() => setTab(0)}
                      className={`text ${tab === 0 ? "bg-blue-600 text-white" : "border border-gray-400"}   py-3 rounded-lg`}
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => setTab(1)}
                      className={`text ${tab === 1 ? "bg-blue-600 text-white" : "border border-gray-400"} py-3 rounded-lg`}
                    >
                      Skills
                    </button>
                    <button
                      onClick={() => setTab(2)}
                      className={`text ${tab === 2 ? "bg-blue-600 text-white" : "border border-gray-400"} py-3 rounded-lg`}
                    >
                      About Me
                    </button>
                  </div>
                </div>
                <div className="text grid col-span-2 border">
                  {tab === 0 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My experience
                      </h2>
                    </div>
                  )}
                  {tab === 1 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My skills
                      </h2>
                    </div>
                  )}
                  {tab === 2 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About me
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Camera Notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gray-900 rounded-b-xl"></div>

            {/* Screen Reflection Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* HINGE */}
        <div className="absolute top-[73%] left-1/2 transform -translate-x-1/2 w-[60%] h-2 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-sm z-10"></div>
      </div>
    </div>
  );
};

export default MacBookProMockup;
