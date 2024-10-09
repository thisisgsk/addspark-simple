import NavBar from "@/app/sections/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Services from "@/app/sections/Services";
export default function Home() {
  return (
    <div className="bg-custombg">
      <NavBar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
