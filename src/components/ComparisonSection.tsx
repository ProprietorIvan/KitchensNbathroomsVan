import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  orientation: "left" | "right";
  url: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ComparisonSection = () => {
  const services: Service[] = [
    {
      title: "Kitchen Renovations",
      description:
        "Transform your kitchen into a masterpiece of form and function. Our kitchen renovations focus on clean lines, premium materials, and intuitive layouts that enhance both the beauty and usability of your space. From custom cabinetry to statement countertops, we create kitchens that inspire.",
      buttonText: "Explore Kitchen Services",
      image: "/photos/kitchens/hero.jpg",
      orientation: "right",
      url: "/kitchens",
    },
    {
      title: "Bathroom Transformations",
      description:
        "Create a private sanctuary with our bathroom renovation services. We design serene, elegant spaces that combine luxury with functionality. Our minimalist approach emphasizes quality fixtures, thoughtful lighting, and timeless materials to create a space that feels both indulgent and calming.",
      buttonText: "View Bathroom Projects",
      image: "/photos/bathrooms/hero2.jpg",
      orientation: "left",
      url: "/bathrooms",
    },
  ];

  // Create JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Cloud Bathrooms and Kitchens Vancouver",
    url: "https://vanbathsnkitchens.com",
    logo: "https://vanbathsnkitchens.com/logo.png",
    image: services.map(
      (service) => `https://vanbathsnkitchens.com${service.image}`
    ),
    description:
      "Premium kitchen and bathroom renovation services in Vancouver offering custom designs with minimalist elegance.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.2827",
      longitude: "-123.1207",
    },
    telephone: "+17782008827",
    email: "dream@vanbathsnkitchens.com",
    priceRange: "$$$",
    areaServed: "Vancouver Metropolitan Area",
    services: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://vanbathsnkitchens.com${service.url}`,
    })),
  };

  const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
    <article className="py-20">
      <div
        className={`flex flex-col ${
          service.orientation === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12`}
      >
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              priority={index === 0}
              quality={90}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-light mb-6">{service.title}</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {service.description}
          </p>
          <a
            href={service.url}
            className="inline-flex items-center text-black hover:text-gray-600 transition-colors group"
            aria-label={`Learn more about our ${service.title.toLowerCase()}`}
          >
            {service.buttonText}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-light mb-6">Our Specialties</h2>
        <p className="text-gray-600">
          We create exceptional spaces with minimalist design principles and
          superior craftsmanship. Each renovation is meticulously planned and
          executed to transform your home.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
