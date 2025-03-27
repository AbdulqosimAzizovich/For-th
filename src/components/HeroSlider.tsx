import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/4.jpg";
import img2 from "../../public/5.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/1.jpg";

const slides = [
  {
    id: 1,
    title: "Special Partner Program",
    description:
      "Refer your friends to our company, and for every 3 friends you invite, enjoy and get a 1% discount on your service fee charges!",
    image: img1,
  },
  {
    id: 2,
    title: "Truck Financing Support",
    description:
      "Moreover, we can help you to increase the size of your fleet via finding company drivers, trucks and financial support for the down payment of truck",
    image: img2,
  },
  {
    id: 3,
    title: "Rewards Program",
    description:
      "Earn 1% cashback from your gross earnings if you drive with us for at least 6 months and achieve $200,000 or more in earnings!",
    image: img3,
  },
  {
    id: 4,
    title: "Save on Fuel with Our Card",
    description: "Save Up to $1 Per Gallon with Our Fuel Card!",
    bulletPoints: ["Pilot & Flying J", "Loves", "TA PETRO"],
    image: img4,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Slide changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div
          className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900"
          role="region"
          aria-label="Hero Image Slider"
        >
          {/* Slides */}
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
                ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                aria-hidden={index !== currentSlide}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Black gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
                  <div
                    className={`max-w-xl transition-all duration-1000 transform
                    ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-gray-200 mb-2">
                      {slide.description}
                    </p>

                    {/* Bullet points for slide 4 */}
                    {slide.bulletPoints && (
                      <ul className="text-xl text-gray-200 mb-8 list-none">
                        {slide.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start ml-1 mb-1">
                            <span className="mr-2 text-gray-300">*</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Add spacing if there are no bullet points */}
                    {!slide.bulletPoints && <div className="mb-6"></div>}

                    <a
                      href="tel:+1 (513) 757-1045"
                      className="inline-block cursor-pointer"
                    >
                      <button
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 min-h-[48px] min-w-[120px]"
                        aria-label="Learn more about our services"
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition text-white min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div
              className="flex gap-3"
              role="tablist"
              aria-label="Slide indicators"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`min-h-[44px] min-w-[44px] p-2 flex items-center justify-center transition-all`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                >
                  <span
                    className={`block h-3 rounded-full transition-all
                  ${
                    index === currentSlide
                      ? "bg-blue-600 w-6"
                      : "bg-gray-400 w-3"
                  }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-800 transition text-white min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* SEO-Focused Hero Section - Added directly after the slider */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
            data-aos="fade-up"
          >
            SIMA FREIGHTS LLC - Trusted Freight Forwarding Network
          </h1>
          <p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We help freight forwarding enterprises and truck drivers achieve
            sustained profitability with reliable loads, competitive pay, and
            24/7 support.
          </p>
        </div>
      </section>
    </>
  );
}
