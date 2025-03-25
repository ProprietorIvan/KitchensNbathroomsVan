import React from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Bathroom Renovations",
      description:
        "Transform your bathroom into a luxurious retreat with our full-service bathroom renovation solutions. From minor updates to complete remodels, we handle every aspect of your project with precision and care.",
      features: [
        "Custom shower and bath installations",
        "Vanity and cabinetry design and installation",
        "Tile work and waterproofing",
        "Lighting and ventilation upgrades",
        "Plumbing fixture installation",
        "Accessibility modifications",
      ],
      image: "/photos/bathrooms/hero.jpg",
      link: "/bathrooms",
    },
    {
      title: "Kitchen Renovations",
      description:
        "Create the kitchen of your dreams with our expert renovation services. We combine functional design with beautiful aesthetics to deliver kitchens that inspire culinary creativity and enhance your home's value.",
      features: [
        "Custom cabinetry design and installation",
        "Countertop selection and installation",
        "Backsplash and tile work",
        "Appliance installation",
        "Lighting design and fixtures",
        "Islands and special features",
      ],
      image: "/photos/kitchens/hero.jpg",
      link: "/kitchens",
    },
    {
      title: "Design Services",
      description:
        "Our professional design services ensure your renovation reflects your personal style while maximizing functionality. We work closely with you to create spaces that perfectly align with your vision and lifestyle.",
      features: [
        "3D visualization and rendering",
        "Material and finish selection",
        "Color palette development",
        "Space planning and layout",
        "Lighting design",
        "Fixture and hardware selection",
      ],
      image: "/photos/design.jpg",
      link: "/contact",
    },
    {
      title: "Project Management",
      description:
        "From permits to final inspections, we handle every aspect of your renovation project. Our comprehensive project management ensures your renovation progresses smoothly, on time, and within budget.",
      features: [
        "Permit acquisition",
        "Contractor coordination",
        "Timeline development and tracking",
        "Budget management",
        "Quality control",
        "Regular progress updates",
      ],
      image: "/photos/project.jpg",
      link: "/contact",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with a thorough consultation to understand your goals, preferences, and budget. This initial meeting helps us assess your space and discuss possibilities.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our design team creates detailed plans for your project, including 3D renderings, material selections, and comprehensive specifications.",
    },
    {
      number: "03",
      title: "Proposal & Contract",
      description:
        "You'll receive a detailed proposal outlining scope, timeline, and costs. Once approved, we formalize the agreement with a clear contract.",
    },
    {
      number: "04",
      title: "Construction",
      description:
        "Our skilled craftsmen execute the renovation with precision, adhering to the highest standards of quality and craftsmanship.",
    },
    {
      number: "05",
      title: "Final Inspection",
      description:
        "We conduct a thorough inspection with you to ensure every detail meets our exacting standards and your expectations.",
    },
    {
      number: "06",
      title: "Completion & Warranty",
      description:
        "After your approval, we provide care instructions and our 2-year workmanship warranty, ensuring your lasting satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Services | Cloud Bathrooms and Kitchens Vancouver</title>
        <meta
          name="description"
          content="Expert bathroom and kitchen renovation services in Vancouver. From design to completion, we transform your space with precision and care."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/services-hero.jpg"
            alt="Kitchen and Bathroom Renovation Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
              Our Services
            </h1>
            <p className="text-xl font-light text-white/90 max-w-2xl">
              Transforming homes throughout Vancouver with exceptional kitchen
              and bathroom renovations
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">What We Offer</h2>
            <p className="text-gray-600">
              Comprehensive renovation services tailored to your unique style
              and needs
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="mr-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-sm font-light text-black hover:text-gray-700 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Process</h2>
            <p className="text-gray-600">
              A transparent, collaborative approach to bringing your vision to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {process.map((step) => (
              <div key={step.number} className="bg-white p-8 shadow-sm">
                <div className="text-4xl font-light text-gray-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-light mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Ready to Start Your Renovation Journey?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step
            toward your dream space.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-light tracking-wide hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center mx-auto w-fit"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
