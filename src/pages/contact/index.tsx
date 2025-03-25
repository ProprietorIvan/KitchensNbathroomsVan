import Navigation from "@/components/Navigation";
import { Phone, Mail, Clock, MapPin, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (778) 200-8827",
      link: "tel:+17782008827",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@cloudbathrooms.ca",
      link: "mailto:info@cloudbathrooms.ca",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Monday – Friday: 9 AM - 5 PM",
      link: null,
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Greater Vancouver Area",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/contact/hero.jpg"
            alt="Contact Cloud Bathrooms and Kitchens"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl font-light text-white/90 max-w-2xl">
              Reach out to discuss your renovation project or schedule a
              consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="text-gray-800 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-light mb-3">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600 text-center">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Send Us a Message</h2>
            <p className="text-gray-600">
              We&apos;ll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10">
            <div className="space-y-6">
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
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    required
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
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-light text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 focus:border-black focus:ring-0 transition-all"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 font-light inline-flex items-center hover:bg-gray-800 transition-colors duration-300"
                >
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Visit Our Showroom</h2>
            <p className="text-gray-600">
              Come see our designs and materials in person
            </p>
          </div>

          <div className="h-96 bg-gray-200 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83329.59341893041!2d-123.18468593039746!3d49.25795812827903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1651245328557!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cloud Bathrooms and Kitchens Vancouver Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
