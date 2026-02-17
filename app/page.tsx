import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

<h1>Nuevo cambio en rama feature</h1>

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Services />
      <Pricing />
      <WhyUs />
      <Comparison />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
