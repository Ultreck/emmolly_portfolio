import React, { useState } from "react";
import {Card} from "@heroui/react";

const MacBookProMockup: React.FC<React.PropsWithChildren<{}>> = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-transparent">
      <div className="relative w-full h-[970px]">
        <div className="absolute top-0 w-full h-[75%] bg-gray-800 rounded-t-[40px] border-[12px] border-gray-900 dark:border-gray-700 border-b-0 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 m-2 bg-gray-900 rounded-t-[28px] overflow-hidden">
            {/* Screen Content - Replace with your content */}
            <div className="h-full dark:bg-gradient-to-br bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-blue-900 dark:to-[#EC4899]">
              <div className="text-center gap-5 p-10 grid grid-cols-3">
                <div className="text">
                  <h2 className="text-3xl sm:text-4xl font-semibold font-mono text-gray-900 dark:text-white mb-4">
                    Why hire me?
                  </h2>
                  <p className="text-start">
                    Full-stack proficiency meets creative problem-solving. I
                    bridge technical execution with strategic vision to deliver
                    exceptional digital products.
                  </p>
                  <div className="text mt-10 grid gap-10">
                    <Card>

                    <button
                      onClick={() => setTab(0)}
                      className="text py-3 rounded-lg"
                      >
                      Experience
                    </button>
                        </Card>
                    <button
                      onClick={() => setTab(1)}
                      className="text py-3 rounded-lg"
                    >
                      Skills
                    </button>
                    <button
                      onClick={() => setTab(2)}
                      className="text py-3 rounded-lg"
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
