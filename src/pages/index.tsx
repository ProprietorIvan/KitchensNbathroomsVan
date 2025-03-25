import React from "react";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import StepsSection from "@/components/StepsSection";
import Testemonials from "@/components/Testemonials";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

const Home: NextPage = () => {
  // Structured data for Cloud Bathrooms and Kitchens Vancouver
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Cloud Bathrooms and Kitchens Vancouver",
    image: "https://vanbathsnkitchens.com/photos/kitchens/hero.jpg",
    url: "https://vanbathsnkitchens.com",
    "@id": "https://vanbathsnkitchens.com/#organization",
    description:
      "Premium kitchen and bathroom renovations in Vancouver. Transforming spaces with minimalist elegance and superior craftsmanship.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: "Vancouver Metropolitan Area",
    priceRange: "$$$",
    openingHours: "Mo-Fr 09:00-18:00",
    telephone: "+17782008827",
    sameAs: [
      "https://www.instagram.com/cloudbathsandkitchens",
      "https://www.houzz.com/cloudbathsandkitchens",
    ],
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cloud Bathrooms and Kitchens Vancouver",
    image: "https://vanbathsnkitchens.com/photos/kitchens/hero.jpg",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    telephone: "+17782008827",
    url: "https://vanbathsnkitchens.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical kitchen or bathroom renovation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kitchen renovations typically take 4-6 weeks, while bathroom renovations can be completed in 2-4 weeks. The exact timeline depends on the scope of work, complexity of design, and availability of materials.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide free consultations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free, no-obligation consultations for all kitchen and bathroom renovation projects in Vancouver.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <>
          <title>
            Cloud Bathrooms and Kitchens Vancouver | Premium Renovation Services
          </title>
          <meta
            name="description"
            content="Vancouver's premium kitchen and bathroom renovation specialists. Transform your home with minimalist elegance and superior craftsmanship."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://vanbathsnkitchens.com" />
          <meta
            property="og:title"
            content="Cloud Bathrooms and Kitchens Vancouver | Premium Renovation Services"
          />
          <meta
            property="og:description"
            content="Vancouver's premium kitchen and bathroom renovation specialists. Transform your home with minimalist elegance and superior craftsmanship."
          />
          <meta
            property="og:image"
            content="https://vanbathsnkitchens.com/photos/kitchens/hero.jpg"
          />
          <meta
            property="og:site_name"
            content="Cloud Bathrooms and Kitchens Vancouver"
          />
          <meta property="og:locale" content="en_CA" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://vanbathsnkitchens.com" />
          <meta
            name="twitter:title"
            content="Cloud Bathrooms and Kitchens Vancouver | Premium Renovation Services"
          />
          <meta
            name="twitter:description"
            content="Vancouver's premium kitchen and bathroom renovation specialists."
          />
          <meta
            name="twitter:image"
            content="https://vanbathsnkitchens.com/photos/kitchens/hero.jpg"
          />

          {/* Additional meta tags */}
          <meta
            name="keywords"
            content="kitchen renovation vancouver, bathroom remodel vancouver, luxury kitchen design, premium bathroom renovation, minimalist kitchen, custom cabinetry, vancouver renovation"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="author"
            content="Cloud Bathrooms and Kitchens Vancouver"
          />
          <meta name="geo.region" content="CA-BC" />
          <meta name="geo.placename" content="Vancouver" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(businessStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </>
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <Hero />

        <main>
          <ComparisonSection />
          <StepsSection />
          <Testemonials />
          <FAQ />

          {/* CTA Section */}
          <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                Contact us today to schedule a free consultation and start your
                journey to the perfect kitchen or bathroom.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
              >
                Get a Free Consultation
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
