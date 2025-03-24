// components/SoldItems.tsx
// import { Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Company {
  id: number;
  name: string;
  logo: string;
}

export default function SoldItems() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  // const [viewportWidth, setViewportWidth] = useState(0);

  // Sample company data - replace with your actual companies
  const companies: Company[] = [
    { id: 1, name: "Company 1", logo: "/Greenland.jpg" },
    { id: 2, name: "Company 2", logo: "/Afsu.jpg" },
    { id: 3, name: "Company 3", logo: "/Ik.jpg" },
    { id: 4, name: "Company 4", logo: "/Minessota.jpg" },
    { id: 5, name: "Company 5", logo: "/Wa.JPEG" },
    { id: 6, name: "Company 6", logo: "/X9.png" },
    { id: 7, name: "Company 7", logo: "/Afsu.jpg" },
    { id: 8, name: "Company 8", logo: "/Karnab.jpg" },
    { id: 9, name: "Company 9", logo: "/twenty.jpg" },
    { id: 10, name: "Company 10", logo: "/Minessota.jpg" },
    { id: 11, name: "Company 11", logo: "/Wa.JPEG" },
    { id: 12, name: "Company 12", logo: "/X9.png" },
    { id: 13, name: "Company 13", logo: "/Greenland.jpg" },
    { id: 14, name: "Company 14", logo: "/Karnab.jpg" },
    { id: 15, name: "Company 15", logo: "/Ik.jpg" },
    { id: 16, name: "Company 16", logo: "/Minessota.jpg" },
    { id: 17, name: "Company 17", logo: "/Wa.JPEG" },
    { id: 18, name: "Company 18", logo: "/twenty.jpg" },
    { id: 19, name: "Company 19", logo: "/Greenland.jpg" },
    { id: 20, name: "Company 20", logo: "/Karnab.jpg" },
  ];

  // Handle responsive layout
  const [itemsPerSlide, setItemsPerSlide] = useState(5);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // setViewportWidth(width);

      if (width < 640) {
        setItemsPerSlide(2);
        setSlidesPerView(1);
      } else if (width < 768) {
        setItemsPerSlide(2);
        setSlidesPerView(2);
      } else if (width < 1024) {
        setItemsPerSlide(3);
        setSlidesPerView(1);
      } else {
        setItemsPerSlide(5);
        setSlidesPerView(1);
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate total number of slides
  useEffect(() => {
    setTotalSlides(
      Math.ceil(companies.length / (itemsPerSlide * slidesPerView))
    );
  }, [companies.length, itemsPerSlide, slidesPerView]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating, isPaused]);

  const handlePrev = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Determine grid columns class based on itemsPerSlide
  const getGridClass = () => {
    switch (itemsPerSlide) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
      default:
        return "grid-cols-5";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b bg-black text-white ">
      <div
        ref={containerRef}
        className="container mx-auto px-4 max-w-4xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-gray-900/70 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-blue-200">
            Here are the partner companies that we work with:
          </h2>

          <div
            className="relative mt-8 sm:mt-10 px-8 sm:px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slider container */}
            <div ref={sliderRef} className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Create slides */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-shrink-0 w-full">
                    <div
                      className={`grid ${getGridClass()} gap-3 sm:gap-4 md:gap-6`}
                    >
                      {Array.from({ length: slidesPerView }).map(
                        (_, viewIndex) => {
                          const startIndex =
                            slideIndex * itemsPerSlide * slidesPerView +
                            viewIndex * itemsPerSlide;
                          return companies
                            .slice(startIndex, startIndex + itemsPerSlide)
                            .map((company) => (
                              <div
                                key={company.id}
                                className="flex flex-col items-center group"
                              >
                                <div className="bg-white rounded-xl p-3 sm:p-4 w-full aspect-square flex items-center justify-center relative overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                                  <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                      src={company.logo}
                                      alt={`${company.name} logo`}
                                      width={80}
                                      height={80}
                                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                  </div>
                                </div>
                                {/* <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-center font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                  {company.name}
                                </p> */}
                              </div>
                            ));
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-[calc(50%-45px)] bg-gray-800 bg-opacity-80 p-2 sm:p-3 rounded-full z-10 hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-100" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-[calc(50%-45px)] bg-gray-800 bg-opacity-80 p-2 sm:p-3 rounded-full z-10 hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-100" />
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-[#2563EB] scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
