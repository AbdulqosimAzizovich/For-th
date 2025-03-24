"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const PageLoaderContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Watch for navigation changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // For initial page load
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-gray-700 to-black"
        >
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              {/* Mountains silhouette */}
              <motion.div
                className="absolute bottom-0 h-12 w-64 bg-gray-800 rounded-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-0 left-10 h-20 w-20 bg-gray-700 rounded-t-3xl z-20"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 right-14 h-16 w-16 bg-gray-600 rounded-t-3xl z-20"
                initial={{ y: 16 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* Animated truck */}
              <motion.div
                className="relative h-10 w-28 z-30"
                initial={{ x: -100 }}
                animate={{ x: 100 }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              >
                <div className="absolute top-0 right-0 h-6 w-16 bg-blue-600 rounded-t-md" />
                <div className="absolute bottom-0 h-4 w-28 bg-blue-700 rounded-md" />
                <div className="absolute bottom-0 left-2 h-2 w-4 bg-gray-300 rounded-full" />
                <div className="absolute bottom-0 right-2 h-2 w-4 bg-gray-300 rounded-full" />
              </motion.div>
            </div>

            {/* Pulsing loading text */}
            <motion.p
              className="text-white text-lg font-semibold"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1, 0.98],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PageLoader = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLoaderContent />
    </Suspense>
  );
};

export default PageLoader;
