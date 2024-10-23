import React, { useState, useEffect } from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import LoadingScreen from "./LoadingScreen.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout, e.g., 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="overflow-hidden">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <Hero />
          <Features />
          <Pricing />
          <Faq />
          <Testimonials />
          <Download />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
