import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import NavLink from "./components/NavLink";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mt-24 mx-auto px-12 py-4">
          <title>Pedro's Portfolio</title>
          <NavBar/>
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
          <EmailSection/>
          <FooterSection/>
        </div>
      </main>
  );
}
