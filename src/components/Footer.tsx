import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  // Structured data for the organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cloud Bathrooms and Kitchens Vancouver",
    url: "https://vanbathsnkitchens.com",
    logo: "https://vanbathsnkitchens.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6Z 1R3",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+17782008827",
      contactType: "customer service",
      email: "dream@vanbathsnkitchens.com",
      availableLanguage: ["English"],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </Head>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company */}
            <div>
              <h3 className="text-lg font-light mb-6">Cloud</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Premium kitchen and bathroom renovations in Vancouver.
                Transforming spaces with minimalist elegance and superior
                craftsmanship.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-light mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "Kitchens", "Bathrooms", "About", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-light mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Kitchen Renovation",
                  "Bathroom Remodeling",
                  "Custom Cabinetry",
                  "Countertop Installation",
                  "Tile Work",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-sm text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-light mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">(778) 200-8827</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    dream@vanbathsnkitchens.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">Vancouver, BC</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Mon-Fri: 9am - 6pm
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Cloud Bathrooms and Kitchens
              Vancouver. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
