import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import usePort from "@/hooks/usePort";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  const { baseUrl } = usePort();
  const [allAppsIps, setAllAppsIps] = useState([]);
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route
          path="/projects"
          element={<ProjectsSection data={allAppsIps} />}
        />
        <Route path="/contacts" element={<ContactSection />} />
      </Routes>
    </div>
  );
};

export default Routers;
