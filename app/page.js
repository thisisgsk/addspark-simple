import { GoogleTagManager } from '@next/third-parties/google';
import NavBar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Services from "@/app/sections/Services";
import Branding from "@/app/sections/Branding";
import Team from "@/app/sections/Team";
import Footer from "@/app/sections/Footer";
import Contact from "@/app/sections/Contact";
import Clients from "@/app/sections/Clients";
export default function Home() {
  return (
    <div className="bg-custombg box-border container mx-auto">
      <GoogleTagManager gtmId="GTM-5DQWSS4X" />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Branding />
      <Clients />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
