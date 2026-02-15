import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <Contact />
    </main>
  );
}
