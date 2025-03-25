import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const StepsSection = () => {
  const [activeTab, setActiveTab] = useState("kitchens");

  const kitchenGallery = [
    {
      id: 1,
      imgUrl: "/photos/kitchens/hero.jpg",
      alt: "Modern luxury kitchen renovation",
    },
    {
      id: 2,
      imgUrl: "/photos/kitchens/Renovation-maison-Versailles-particuliers.jpg",
      alt: "Elegant kitchen renovation with island",
    },
    {
      id: 3,
      imgUrl: "/photos/kitchens/Renovation-cuisine-Paris-14-Particuliers.jpg",
      alt: "Contemporary kitchen design",
    },
    {
      id: 4,
      imgUrl: "/photos/kitchens/Renovation-maison-Sevres-Particuliers.jpg",
      alt: "Minimalist kitchen renovation",
    },
    {
      id: 5,
      imgUrl: "/photos/kitchens/Renovation-cuisine-Paris-5-particuliers.jpg",
      alt: "Modern kitchen remodel",
    },
    {
      id: 6,
      imgUrl:
        "/photos/kitchens/by-Made-2-Measure-Bespoke-Furniture-Southampton-LTD.webp",
      alt: "Custom kitchen cabinetry",
    },
  ];

  const bathroomGallery = [
    {
      id: 1,
      imgUrl: "/photos/bathrooms/hero2.jpg",
      alt: "Elegant bathroom renovation",
    },
    {
      id: 2,
      imgUrl: "/photos/bathrooms/11-07-16-ht-KristinaCrestin-11.webp",
      alt: "Luxury bathroom design",
    },
    {
      id: 3,
      imgUrl: "/photos/bathrooms/powerfulbathroom.jpg",
      alt: "Modern bathroom remodel",
    },
    {
      id: 4,
      imgUrl:
        "/photos/bathrooms/Renovation-salle-de-bain-Paris-10-Particuliers.jpg",
      alt: "Contemporary bathroom renovation",
    },
    {
      id: 5,
      imgUrl:
        "/photos/bathrooms/Renovation-salle-de-bain-Issy-les-Moulineaux-Particuliers.jpg",
      alt: "Minimalist bathroom design",
    },
    {
      id: 6,
      imgUrl: "/photos/bathrooms/QIUET-CENTER-2.webp",
      alt: "Spa-like bathroom renovation",
    },
  ];

  const gallery = activeTab === "kitchens" ? kitchenGallery : bathroomGallery;

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with a detailed consultation to understand your vision, requirements, and budget for your kitchen or bathroom renovation.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our design team creates a custom concept that perfectly balances aesthetics and functionality, tailored to your lifestyle.",
    },
    {
      number: "03",
      title: "Selection",
      description:
        "Choose from premium materials, fixtures, and finishes with guidance from our design experts.",
    },
    {
      number: "04",
      title: "Construction",
      description:
        "Our skilled craftsmen execute the renovation with meticulous attention to detail and strict quality control.",
    },
    {
      number: "05",
      title: "Completion",
      description:
        "After a thorough inspection and cleaning, we present your transformed space, ensuring every detail meets our exacting standards.",
    },
  ];

  // Structured data for the success metrics
  const metricsStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "A-Z Handyman",
    description:
      "Professional handyman and renovation services in Vancouver with over 2200 happy clients and 1000+ completed projects.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2200",
      bestRating: "5",
      worstRating: "1",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "15",
    },
  };

  // Structured data for the project gallery
  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "A-Z Handyman Recent Projects Gallery",
    description:
      "Gallery of recent renovation and home improvement projects completed by A-Z Handyman in Vancouver",
    image: gallery.map((item) => ({
      "@type": "ImageObject",
      contentUrl: `https://az-handyman.ca${item.imgUrl}`,
      description: item.alt,
    })),
  };

  return (
    <>
      <Head>
        <title>
          Our Success Rate & Recent Projects | A-Z Handyman Vancouver
        </title>
        <meta
          name="description"
          content="Discover our track record of success with 2200+ happy clients and 1000+ completed projects. View our recent renovation and home improvement projects in Vancouver."
        />
        <meta
          name="keywords"
          content="vancouver renovation, home improvement vancouver, renovation projects, home renovation gallery, handyman success rate"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Our Success Rate & Recent Projects | A-Z Handyman Vancouver"
        />
        <meta
          property="og:description"
          content="Discover our track record of success with 2200+ happy clients and 1000+ completed projects. View our recent renovation projects."
        />
        <meta
          property="og:image"
          content={`https://az-handyman.ca${gallery[0].imgUrl}`}
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metricsStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(galleryStructuredData),
          }}
        />
      </Head>

      <main className="w-full">
        <section className="py-20 bg-white" aria-label="Our Process">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-light mb-6">Our Process</h2>
              <p className="text-gray-600">
                We follow a meticulous, step-by-step approach to ensure your
                kitchen or bathroom renovation exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step) => (
                <article key={step.number} className="flex flex-col">
                  <div className="text-3xl font-light text-gray-300 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-light mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50" aria-label="Our Portfolio">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-light mb-6">Our Portfolio</h2>
              <p className="text-gray-600 mb-8">
                Browse our collection of stunning kitchen and bathroom
                transformations. Each project showcases our commitment to
                exceptional design and craftsmanship.
              </p>

              {/* Tabs */}
              <div className="flex justify-center gap-8 mb-12">
                <button
                  onClick={() => setActiveTab("kitchens")}
                  className={`text-sm font-light pb-2 border-b-2 transition-colors ${
                    activeTab === "kitchens"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  Kitchens
                </button>
                <button
                  onClick={() => setActiveTab("bathrooms")}
                  className={`text-sm font-light pb-2 border-b-2 transition-colors ${
                    activeTab === "bathrooms"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  Bathrooms
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <article
                  key={item.id}
                  className="group relative overflow-hidden bg-white"
                >
                  <div className="relative w-full h-72">
                    <Image
                      src={item.imgUrl}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={activeTab === "kitchens" ? "/kitchens" : "/bathrooms"}
                className="inline-flex items-center text-sm font-light hover:text-gray-600 transition-colors"
              >
                View all {activeTab === "kitchens" ? "kitchen" : "bathroom"}{" "}
                projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StepsSection;
