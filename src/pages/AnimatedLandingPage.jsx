import React, { useEffect, useState } from 'react';
import DarkParticles from '../components/DarkParticles';
import { motion } from 'framer-motion';
import Logo from '../assets/logo1.jpeg';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 bg-transparent backdrop-blur-3xl left-0 right-0 z-20 px-6 py-4 flex justify-between items-center"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-white flex items-center text-xl font-bold"
    >
      <img src={Logo} alt="Logo" className="w-[60px] h-[60px] rounded-full" />
      creatormail
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex gap-4"
    >
      <button className="px-4 py-2 text-white bg-transparent border border-[#1fe817] rounded-lg hover:bg-green-500/30 text-sm transition-all">
        Add your token
      </button>
      <button className="px-4 py-2 bg-[#1fe817] text-xs rounded-lg hover:bg-opacity-90 transition-all font-medium">
        Send Now
      </button>
    </motion.div>
  </motion.nav>
);

const AnimatedLandingPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-green-950 overflow-hidden">
      {/* Particles Background */}
      <DarkParticles 
        particleCount={2150}
        proximity={100}
        baseSpeed={0.15}
        particleSize={2}    // Particle size multiplier
        blurIntensity={15}    // Intensity of the glow effect around particles
        glowSize={200}    
      />

      {/* Navbar */}
      <Navbar />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center space-y-6"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            Send 
            <span className="inline-flex mx-2">
              <span className="text-green-400">Your tokens</span>
            </span>
          </h2>
          
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight flex items-center">
            Base
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mx-4"
            >
              →
            </motion.span>
            Email
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="ml-4 text-green-400 text-2xl"
            >
              to anyone
            </motion.span>
          </h2>
        </motion.div>

        {/* Bottom Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex gap-4"
        >
          <button className="px-6 py-3 bg-green-500/20 text-white rounded-lg font-semibold hover:bg-green-500/30 transition-all">
            Add your token
          </button>
          <button className="px-6 py-3 bg-white text-green-900 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
            Send Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedLandingPage;