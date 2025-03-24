"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
          }}
          exit={{
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 },
          }}
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full cursor-pointer bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
          aria-label="Yuqoriga qo'tarish"
          data-aos="fade-up"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <ChevronUp size={28} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
