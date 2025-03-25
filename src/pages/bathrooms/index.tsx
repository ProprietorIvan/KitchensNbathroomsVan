import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Droplets,
  CheckCircle2,
  Shield,
  Layout,
  Clock,
  Check,
  Home,
} from "lucide-react";
import Image from "next/image";
import { Lead } from "@/utils/createLead";

type CustomerType = "residential" | "commercial" | null;

interface FormData {
  name: string;
  phone: string;
  facilityType: string;
  projectSize: string;
  urgency: string;
  email: string;
  address: string;
  projectDetails: string;
}

const BathroomLandingPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [facilityType, setFacilityType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "address" | "projectDetails">
  >({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      customerType,
      facilityType,
      urgency,
      projectSize,
    };
    try {
      const newLead: Lead = {
        name: formData.name,
        date_Mjj7SnLm: new Date().toISOString(),
        lead_status: "New Lead",
        status_1_Mjj7KSmv:
          customerType === "commercial" ? "Commercial Form" : "Form Drywall",
        text_Mjj7Hg3c: `project details: ${formData.projectDetails}, urgency: ${urgency}, customer type: ${customerType}, facility type: ${facilityType}, project size:${projectSize}`,
        numbers_Mjj7fpib: 0,
        job_location_mkm418ra: formData.address,
        lead_phone: formData.phone,
        lead_email: formData.email,
        status_1_Mjj77YUc: "Drywall Repair",
        status_1_Mjj7Dz0C: "No Payment Due",
        status_1_Mjj7nPIN: "Not Insurance",
      };
      fetch("/api/monday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });
    } catch (e) {
      console.warn(e);
    }
    try {
      // You can replace this with your actual API endpoint
      const response = await fetch("/api/bathroom_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Reset form
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          projectDetails: "",
        });
        setCustomerType(null);
        setFacilityType("");
        setUrgency("");
        setProjectSize("");
      } else {
        throw new Error("Failed to submit renovation request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleConsultation = () => {
    window.location.href = "tel:+1 (778) 200-8827"; // Cloud Bathrooms and Kitchens phone number

    const contactform = document.querySelector("#contactform");
    if (contactform) {
      contactform.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  const serviceFeatures = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Luxury fixtures and high-quality finishes",
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Custom Design",
      description: "Personalized layouts tailored to your space",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Efficient Process",
      description: "Streamlined renovation with minimal disruption",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "5-year warranty on all installations",
    },
  ];

  const bathroomStyles = [
    {
      title: "Modern Minimalist",
      description:
        "Clean lines, simple fixtures, and neutral tones create a serene, clutter-free environment.",
      image: "/photos/bathrooms/hero2.jpg",
    },
    {
      title: "Spa Retreat",
      description:
        "Natural materials, freestanding tubs, and soothing elements for a relaxing sanctuary.",
      image: "/photos/bathrooms/powerfulbathroom.jpg",
    },
    {
      title: "Contemporary Luxury",
      description:
        "Statement fixtures, premium finishes, and bold accents for sophisticated elegance.",
      image: "/photos/bathrooms/11-07-16-ht-KristinaCrestin-11.webp",
    },
  ];

  const facilityTypes = [
    "Single Family Home",
    "Apartment/Condo",
    "Townhouse",
    "Hotel/Hospitality",
    "Office Building",
    "Restaurant",
    "Retail Space",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/bathrooms/hero2.jpg"
            alt="Luxury Bathroom Renovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-none">
              Bathroom Transformations
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 mb-10 tracking-wide">
              Elevate your space with premium bathroom renovations in Vancouver
            </p>
            <button
              onClick={handleConsultation}
              className="bg-white px-8 py-4 text-black font-light tracking-wide hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">
              Our Bathroom Renovation Services
            </h2>
            <p className="text-gray-600">
              We create exceptional bathroom spaces with minimalist design
              principles and superior craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-gray-800 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Styles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Bathroom Design Styles</h2>
            <p className="text-gray-600">
              Explore our range of bathroom design styles, each crafted with
              attention to detail and quality materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bathroomStyles.map((style, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative w-full h-72">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3">{style.title}</h3>
                  <p className="text-sm text-gray-600">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="contactform" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">
              Start Your Bathroom Renovation
            </h2>
            <p className="text-gray-600">
              Tell us about your project and we&apos;ll provide a customized
              quote for your bathroom renovation.
            </p>
          </div>

          {showSuccess ? (
            <SuccessScreen
              email={formData.email}
              setShowSuccess={setShowSuccess}
            />
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12">
              <div className="space-y-8">
                {/* Customer Type Selection */}
                <div>
                  <h3 className="text-xl font-light mb-4">Customer Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setCustomerType("residential")}
                      className={`flex items-center p-4 border ${
                        customerType === "residential"
                          ? "border-black bg-gray-100"
                          : "border-gray-200"
                      } hover:border-black transition-colors`}
                    >
                      <div className="mr-4">
                        {customerType === "residential" ? (
                          <CheckCircle2 className="w-6 h-6 text-black" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-gray-300"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <Home className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-base font-light">Residential</p>
                          <p className="text-xs text-gray-500">
                            For homeowners
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomerType("commercial")}
                      className={`flex items-center p-4 border ${
                        customerType === "commercial"
                          ? "border-black bg-gray-100"
                          : "border-gray-200"
                      } hover:border-black transition-colors`}
                    >
                      <div className="mr-4">
                        {customerType === "commercial" ? (
                          <CheckCircle2 className="w-6 h-6 text-black" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-gray-300"></div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <Layout className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-base font-light">Commercial</p>
                          <p className="text-xs text-gray-500">
                            For businesses
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Facility Type Selection - Only show if Commercial is selected */}
                {customerType === "commercial" && (
                  <div>
                    <h3 className="text-xl font-light mb-4">Facility Type</h3>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    >
                      <option value="">Select facility type</option>
                      {facilityTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Project Urgency */}
                <div>
                  <h3 className="text-xl font-light mb-4">
                    When do you need this project completed?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "As soon as possible",
                      "Within 1 month",
                      "1-3 months",
                      "3+ months",
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setUrgency(option)}
                        className={`flex items-center p-4 border ${
                          urgency === option
                            ? "border-black bg-gray-100"
                            : "border-gray-200"
                        } hover:border-black transition-colors`}
                      >
                        <div className="mr-3">
                          {urgency === option ? (
                            <CheckCircle2 className="w-5 h-5 text-black" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                          )}
                        </div>
                        <p className="text-sm font-light">{option}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Size */}
                <div>
                  <h3 className="text-xl font-light mb-4">Project Size</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {["Small", "Medium", "Large", "Not Sure"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setProjectSize(option)}
                        className={`flex items-center p-4 border ${
                          projectSize === option
                            ? "border-black bg-gray-100"
                            : "border-gray-200"
                        } hover:border-black transition-colors`}
                      >
                        <div className="mr-3">
                          {projectSize === option ? (
                            <CheckCircle2 className="w-5 h-5 text-black" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-gray-300"></div>
                          )}
                        </div>
                        <p className="text-sm font-light">{option}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-light mb-4">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-light text-gray-600 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-light text-gray-600 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-light text-gray-600 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-light text-gray-600 mb-1"
                      >
                        Project Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-light text-gray-600 mb-1"
                  >
                    Project Details (optional)
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 bg-white border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    placeholder="Tell us more about your bathroom renovation project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-4 font-light inline-flex items-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <span>Get Your Quote</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Renovation Process</h2>
            <p className="text-gray-600">
              We follow a proven process to ensure your bathroom renovation
              exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We discuss your vision, requirements, and budget to understand your needs.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Our designers create a custom concept tailored to your lifestyle and preferences.",
              },
              {
                number: "03",
                title: "Construction",
                description:
                  "Our skilled craftsmen execute the renovation with meticulous attention to detail.",
              },
              {
                number: "04",
                title: "Completion",
                description:
                  "We conduct a thorough inspection to ensure every detail meets our high standards.",
              },
            ].map((step) => (
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
    </div>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (p: false) => void;
}) => {
  return (
    <div className="bg-gray-50 p-8 md:p-12 text-center">
      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h3 className="text-2xl font-light mb-4">Thank You!</h3>
      <p className="text-gray-600 mb-6">
        Your bathroom renovation inquiry has been received. We&apos;ll send a
        confirmation to <span className="font-medium">{email}</span> and contact
        you shortly.
      </p>
      <button
        onClick={() => setShowSuccess(false)}
        className="text-black underline hover:text-gray-600 transition-colors text-sm"
      >
        Submit another inquiry
      </button>
    </div>
  );
};

export default BathroomLandingPage;
