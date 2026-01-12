import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen animate-fade-in">
          <Navbar />
          <main>
            <Hero />
            <Process />
            <Pricing />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;