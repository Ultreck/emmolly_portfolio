// import React from 'react';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import { ThemeProvider } from "./context/ThemeContex";
import ProjectsSection from "./components/sections/ProjectSection";
import { HeroUIProvider } from "@heroui/system";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import NumberOfUsers from "./components/NumberOfUsers";
import axios from "axios";

type IpInfo = {
  ip: string;
  appName: string;
  countryName: string;
  countryCode: string;
};
interface CountryInfo {
  countryName: string;
  countryCode: string;
  ips: string[];
}

const baseUrl = import.meta.env.VITE_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [currentIp, setCurrentIp] = useState<IpInfo | undefined>();

  useEffect(() => {
    const handleIsScrolled = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleIsScrolled);
    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, []);

  useEffect(() => {
    const visitedOnceRaw = localStorage.getItem("visitedOnce");
    const alreadyVisited = visitedOnceRaw ? JSON.parse(visitedOnceRaw) : null;
    console.log("Already existed visits", alreadyVisited);

    if (!alreadyVisited) {
      getUserIPAndTrack();
    }
    axios
      .get(`${baseUrl}/${appName}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getUserIPAndTrack = async () => {
    try {
      const res = await fetch(`${apiUrl}`);
      if (!res.ok) return;

      const data = await res.json();

      const dataInfo: IpInfo = {
        ip: data?.ip,
        appName: appName,
        countryName: data?.country_name,
        countryCode: data?.country_code,
      };

      await axios.post(`${baseUrl}`, dataInfo);
      console.log("IP successfully posted");
      window.localStorage.setItem("visitedOnce", JSON.stringify("true"));
      // setCurrentIp(dataInfo);

      // Step 2: Fetch existing IPs from backend
      // const getResponse = await axios.get(`${baseUrl}`);

      // const appTrackingInfos = getResponse.data.appTrackingInfos;
      // console.log("The app tracking info", appTrackingInfos);

      // const match = appTrackingInfos.countries.find(
      //   (c: CountryInfo) => c.countryName === dataInfo.countryName
      // );
      // console.log("Does the country name matched", match);

      // const ipExists = match?.ips.includes(data?.ip);
      // console.log("Does the IP exist", match);

      // Step 3: Post IP if it's not already in DB

      // Mark as visited
    } catch (error) {
      console.error("Tracking error:", error);
    }
  };

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen overflow-visible bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="fixed flex justify-center items-center text-white right-2 bottom-0 mb-10 -ml-5 rounded-full lg:w-12 w-8 lg:h-12 h-8 bg-blue-600 hover:bg-blue-500"
            >
              <FaArrowUp className="lg:text-xl animate-bounce" />
            </button>
          )}
          <div className="text">
            <NumberOfUsers />
          </div>

          <Footer />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
