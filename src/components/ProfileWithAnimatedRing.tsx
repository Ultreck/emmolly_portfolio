import React, { useEffect, useRef } from "react";
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

  return (
    <div className="relative text-center border w-full h-full mx-auto">
      {/* Profile Picture */}
      <div className="absolute inset-0 rounded-full overflow-hidden z-10">
        <img
          src={img}
          alt=""
          className="object-scale-down w-full h-full rounded-full shadow-lg"
        />
      </div>

      {/* Animated Ring */}
      <svg className="absolute mx-auto inset-0 w-full h-full" viewBox="0 0 500 500">
        <circle
          ref={ringRef}
          cx="250"
          cy="250"
          r="245"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeDasharray="150 50" // Creates dash pattern
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
