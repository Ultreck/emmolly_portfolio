import React from "react";

const MacBookProMockup: React.FC<React.PropsWithChildren<{}>> = () => {
 
  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-transparent">
      <div className="relative w-full h-[970px]">
        <div className="absolute top-0 w-full h-[75%] bg-gray-800 rounded-t-[40px] border-[12px] border-gray-900 dark:border-gray-700 border-b-0 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 m-2 bg-gray-900 rounded-t-[28px] overflow-hidden">
            {/* Screen Content - Replace with your content */}
            <div className="h-full bg-gradient-to-br from-blue-900 to-[#EC4899]">
              <div className="text-center p-7">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h2>
              
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
