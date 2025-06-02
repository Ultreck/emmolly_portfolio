import React, { useEffect, useRef, useState } from "react";
import img from "../assets/my profile.jpg";
const ProfileWithAnimatedRing: React.FC<React.PropsWithChildren<{}>> = () => {
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    let direction = 1; // 1 = clockwise, -1 = counter-clockwise
    let animation: Animation | undefined;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      // Reset animation
      ringRef.current?.style.setProperty("--offset", "0");

      // Create new animation only if ringRef.current exists
      if (ringRef.current) {
        animation = ringRef.current.animate(
          [
            { strokeDashoffset: 0 },
            { strokeDashoffset: direction * 628 }, // 2πr (r=100)
          ],
          {
            duration: 10000,
            easing: "linear",
            iterations: 1,
          }
        );

        // Reverse direction after each animation completes
        animation.onfinish = () => {
          direction *= -1;
          timeout = setTimeout(animate, 500); // Pause before reversing
        };
      }
    };

    animate();

    return () => {
      animation?.cancel();
      clearTimeout(timeout);
    };
  }, []);


    const [randomNumbers, setRandomNumbers] = useState<string>('');

  // Function to generate random numbers and combine them
  const generateRandomNumbers = () => {
    const firstRand = Math.floor(Math.random() * 141) + 10; // 10-100 (100-10+1=91)
    const secondRand = Math.floor(Math.random() * 41) + 10; // 10-50 (50-10+1=41)
    return `${firstRand} ${secondRand}`;
  };

  // Generate numbers on component mount and whenever you want to refresh
  useEffect(() => {
    // Set initial value
    setRandomNumbers(generateRandomNumbers());
    
    // Update every 2 seconds
    const interval = setInterval(() => {
      setRandomNumbers(generateRandomNumbers());
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center w-full h-full mx-auto">
      {/* Profile Picture */}
      <div className="absolute flex justify-center  items-center inset-0 rounded-full overflow-hidden z-10">
        <img
          src={img}
          alt="Profile picture"
          className="w-4/5 hover:scale-105 transition-all rounded-full shadow-lg"
        />
      </div>

      {/* Animated Ring */}
      <svg className="absolute mx-auto transition-all duration-500 ease-in-out inset-0 w-full h-full" viewBox="0 0 500 500">
        <circle
          ref={ringRef}
          cx="250"
          cy="250"
          r="250"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeDasharray={randomNumbers}
          strokeLinecap="round"
          style={
            {
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              // @ts-ignore: Allow custom CSS property
              "--offset": "0",
            } as React.CSSProperties
          }
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* Blue */}
            <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ProfileWithAnimatedRing;
