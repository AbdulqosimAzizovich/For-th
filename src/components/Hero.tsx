import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Clock,
  CreditCard,
  MapPin,
  Activity,
  Map,
  Earth,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Revolutionize Your Trucking Business",
      subtitle: "Seamless MC Authority Solutions",
      backgroundImage: "/das1.jpg", // Replace with your actual image path
      icon: Earth,
      features: [
        { icon: Shield, text: "Verified Marketplace" },
        { icon: Clock, text: "Rapid Processing" },
        { icon: CreditCard, text: "Affordable Services" },
      ],
      cta: {
        primary: "Get Started",
        secondary: "Learn More",
      },
    },
    {
      title: "Optimize Your Trucking Fleet with Aged MC authority",
      subtitle: "Comprehensive Business Support",
      backgroundImage: "/das2.jpg", // Replace with your actual image path
      icon: MapPin,
      features: [
        { icon: Activity, text: "Strategic Connections" },
        { icon: Shield, text: "Compliance Assured" },
        { icon: CreditCard, text: "Cost-Effective Solutions" },
      ],
      cta: {
        primary: "Explore Services",
        secondary: "Contact Us",
      },
    },
    {
      title: "Transform Your Trucking Enterprise",
      subtitle: "Advanced MC Authority Management",
      backgroundImage: "/das4.jpg", // Replace with your actual image path
      icon: Map,
      features: [
        { icon: Shield, text: "Expert Consultation" },
        { icon: Clock, text: "Quick Deployment" },
        { icon: CreditCard, text: "Flexible Options" },
      ],
      cta: {
        primary: "Get Quote",
        secondary: "Learn More",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            currentSlide === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay with subtle texture */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="max-w-4xl text-white relative z-10">
              <div className="flex items-center space-x-6">
                <slide.icon
                  size={80}
                  className="text-white/20 hidden md:block"
                />
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-8">
                    {slide.subtitle}
                  </p>

                  <div className="flex space-x-4 mb-8">
                    {slide.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg"
                      >
                        <feature.icon size={24} className="text-white" />
                        <span className="text-sm hidden md:block">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                      {slide.cta.primary}
                    </button>
                    <button className="border-2 cursor-pointer border-white/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                      {slide.cta.secondary}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute z-20 top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-white/10 cursor-pointer hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/10 cursor-pointer hover:bg-white/20 p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition cursor-pointer ${
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
