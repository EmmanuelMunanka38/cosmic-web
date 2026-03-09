import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CosmicEcosystem from "./components/CosmicEcosystem";
import Footer from "./components/Footer";
import AppStoreBadges from "./components/AppStoreBadges";
import Security from "./components/Security";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-[-1] bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <Navbar />
      
      <div className="flex flex-col gap-0"> {/* Stacked components */}
        <Hero />
        <AppStoreBadges />
        <CosmicEcosystem />
        <Security />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}