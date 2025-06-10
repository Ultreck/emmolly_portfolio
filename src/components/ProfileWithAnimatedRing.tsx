import React, { useEffect, useRef, useState } from "react";
import img from "../assets/my profile.jpg";
const ProfileWithAnimatedRing: React.FC<React.PropsWithChildren<{}>> = () => {
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    let direction = 1;
    let animation: Animation | undefined;
    let timeout: NodeJS.Timeout;

    const animate = () => {
      ringRef.current?.style.setProperty("--offset", "0");

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

        animation.onfinish = () => {
          direction *= -1;
          timeout = setTimeout(animate, 500);
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

  const generateRandomNumbers = () => {
    const firstRand = Math.floor(Math.random() * 141) + 10;
    const secondRand = Math.floor(Math.random() * 41) + 10;
    return `${firstRand} ${secondRand}`;
  };

  useEffect(() => {
    setRandomNumbers(generateRandomNumbers());
    
    const interval = setInterval(() => {
      setRandomNumbers(generateRandomNumbers());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center w-full h-full mx-auto">
      <div className="absolute flex justify-center  items-center inset-0 rounded-full overflow-hidden z-10">
        <img
          src={img}
          alt="Profile picture"
          className="w-4/5 hover:scale-105 transition-all rounded-full shadow-lg"
        />
      </div>

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
              "--offset": "0",
            } as React.CSSProperties
          }
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#EC4899" /> 
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ProfileWithAnimatedRing;
