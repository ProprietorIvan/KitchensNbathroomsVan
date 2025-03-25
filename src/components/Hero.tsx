import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import Quote from "./Quote";
import BusinessFrom from "./BusinessForm";
import Testemonials from "@/components/Testemonials";

interface HeroProps {
  examples?: string[];
  context?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  quoteTitle?: string;
  quoteSubtitle?: string;
  quoteDescription?: string;
  showQuote?: boolean;
}

const Hero = ({
  examples = [],
  context = "",
  title = "Elevate Your Space",
  subtitle = "Minimalist Kitchen & Bathroom Design",
  description = "",
  quoteTitle = "",
  quoteSubtitle = "",
  quoteDescription = "",
  showQuote = false,
}: HeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "/photos/kitchens/hero.jpg",
      alt: "Luxurious modern kitchen renovation",
    },
    {
      src: "/photos/bathrooms/hero2.jpg",
      alt: "Elegant bathroom design",
    },
  ];

  useEffect(() => {
    // Carousel effect: change image every 4 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-none">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 mb-10 tracking-wide">
              {subtitle}
            </p>
            <button className="bg-white px-8 py-4 text-black font-light tracking-wide hover:bg-gray-100 transition-colors duration-300">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
