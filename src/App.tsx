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
// import RatingReminder from "./components/RatingReminder";
import Reviews from "./components/Reviews";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import usePort from "./hooks/usePort";

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

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ipInformations, setIpInformations] = useState<CountryInfo[]>([]);
  // const [showToast, setShowToast] = useState(0);
  const [allReviews, setAllReviews] = useState([]);
  const { baseUrl, apiUrl, appName } = usePort();
  const [allAppsIps, setAllAppsIps] = useState([]);

  useEffect(() => {
    const handleIsScrolled = () => {
      setIsScrolled(window.scrollY > 30);
      // setShowToast(window.scrollY);
    };
    window.addEventListener("scroll", handleIsScrolled);
    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, []);

  // useEffect(() => {
  //   if(showToast <= 420){
  //     window.location.href = '/#home'
  //   }
  //   else if(showToast > 600 && showToast <= 1200 ){
  //     window.location.href = '/#services'
  //   }
  //   else if(showToast > 1200 && showToast <= 2052){
  //     window.location.href = '/#resume'
  //   }
  //   else if(showToast > 3000 && showToast <= 4500){
  //     window.location.href = '/#projects'
  //   }else{

  //     window.location.href = '/#contact'
  //   }

  // }, [showToast]);

  useEffect(() => {
    const visitedOnceRaw = localStorage.getItem("visitedOnce");
    const alreadyVisited = visitedOnceRaw ? JSON.parse(visitedOnceRaw) : null;

    if (!alreadyVisited) {
      getUserIPAndTrack();
    }
    axios
      .get(`${baseUrl}/app/tracking/${appName}`)
      .then((res) => {
        
        setIpInformations(
          Array.isArray(res.data.appTrackingInfos.countries)
          ? res.data.appTrackingInfos.countries
          : []
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`${baseUrl}/app/tracking`)
      .then((res) => {
        setAllAppsIps(
          Array.isArray(res.data.appTrackingInfos)
            ? res.data.appTrackingInfos
            : []
        );
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`${baseUrl}/user/review/`)
      .then((res) => {
        setAllReviews(Array.isArray(res.data.reviews) ? res.data.reviews : []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const allIPs = ipInformations.flatMap((c) => c?.ips);

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

      await axios.post(`${baseUrl}/app/tracking`, dataInfo);
      console.log("IP successfully posted");
      window.localStorage.setItem("visitedOnce", JSON.stringify("true"));
    } catch (error) {
      console.error("Tracking error:", error);
    }
  };

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen overflow-visible bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main className="bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-white">
            {/* {showToast >= 4100 && <RatingReminder />} */}
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection data={allAppsIps} />
            <ContactSection />
            <Reviews data={allReviews} />
          </main>
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="fixed flex justify-center items-center text-white right-2 bottom-0 mb-10 -ml-5 rounded-full w-10 h-10 bg-blue-600 hover:bg-blue-500 dark:bg-pink-500 dark:hover:bg-pink-600"
            >
              <FaArrowUp className="text-xl animate-bounce" />
            </button>
          )}
          {!!allIPs.length && (
            <div className="text">
              <NumberOfUsers data={ipInformations} ip={allIPs} />
            </div>
          )}

          <Footer />
        </div>
        <ToastContainer
          newestOnTop
          limit={1}
          theme="colored"
          pauseOnFocusLoss={false}
        />
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
