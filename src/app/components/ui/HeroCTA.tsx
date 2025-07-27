'use client'
import React from "react";
import { motion } from "motion/react";

export default function HeroCTA() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToTryMe = () => {
    if (window.location.pathname === '/') {
      const el = document.getElementById('tryme-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#tryme-anchor';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 sm:px-3 lg:px-8 bg-gradient-to-r">
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          type="button"
          onClick={handleScrollToTryMe}
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-50 transition"
        >
          Discover how I can help your business grow
        </motion.button>
      )}
    </div>
  );
}
