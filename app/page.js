import NavBar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Services from "@/app/sections/Services";
import Branding from "@/app/sections/Branding";
import Team from "@/app/sections/Team";
import Footer from "@/app/sections/Footer";
import Contact from "@/app/sections/Contact";
export default function Home() {
  return (
    <div className="bg-custombg box-border container mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Branding />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
