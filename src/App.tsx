import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ITConsultancy } from "./components/ITConsultancy";
import { FacilityManagement } from "./components/FacilityManagement";
import { Agriculture } from "./components/Agriculture";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "projects">("home");

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === "home" && (
        <>
          <Hero />
          <ITConsultancy />
          <FacilityManagement />
          <Agriculture />
        </>
      )}
      
      {currentPage === "about" && <About />}
      
      {currentPage === "projects" && <Projects />}
      
      <Footer />
    </div>
  );
}