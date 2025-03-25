import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Heart,
  Star,
  Sparkles,
  Shield,
  Home,
  Droplet,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description:
        "We bring enthusiasm and dedication to every project, treating each space as if it were our own.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence",
      description:
        "We hold ourselves to the highest standards in design, materials, and workmanship.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description:
        "We value your time and deliver projects on schedule with transparent communication.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description:
        "We stay at the forefront of design trends and construction technologies.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and respect in all our relationships.",
    },
  ];

  const philosophies = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "The Bathroom Experience",
      description:
        "We believe that your bathroom should be the most comfortable and serene part of your home—a personal sanctuary where you can escape, relax, and rejuvenate. Every bathroom we design aims to create a harmonious balance between functionality and tranquility, with thoughtful details that elevate your daily rituals into moments of peace.",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "The Heart of Your Home",
      description:
        "Kitchens are more than just cooking spaces—they're where families gather, conversations flow, and memories are made. We design kitchens that elegantly serve their function while creating an inviting atmosphere that brings people together. From carefully planned layouts to thoughtful storage solutions, we ensure your kitchen works as beautifully as it looks.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us | Cloud Bathrooms and Kitchens Vancouver</title>
        <meta
          name="description"
          content="Learn about our philosophy and approach to bathroom and kitchen renovations in Vancouver."
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/bathrooms/hero.jpg"
            alt="Cloud Bathrooms and Kitchens Vancouver"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
              About Us
            </h1>
            <p className="text-xl font-light text-white/90 max-w-2xl">
              Creating exceptional spaces through minimalist design and superior
              craftsmanship
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Cloud Bathrooms and Kitchens was founded in Vancouver with a clear
              vision: to transform ordinary spaces into extraordinary
              experiences. Our journey began with a passion for minimalist
              design and a commitment to exceptional craftsmanship.
            </p>

            <p>
              We believe that the most important spaces in your home should be
              both beautiful and functional. The kitchen is the heart of your
              home—where you prepare meals, gather with family, and entertain
              friends. The bathroom is your personal sanctuary—a place of
              relaxation and rejuvenation. These spaces deserve thoughtful
              design and meticulous attention to detail.
            </p>

            <p>
              What sets us apart is our holistic approach. We don&apos;t just
              renovate; we transform. Every project begins with understanding
              your lifestyle, preferences, and needs. Our design process focuses
              on creating harmony between aesthetics and functionality,
              resulting in spaces that are not only visually stunning but also
              perfectly suited to your daily life.
            </p>

            <p>
              Over the years, we&apos;ve built a reputation for excellence
              throughout the Greater Vancouver area. Our team of skilled
              designers, craftsmen, and project managers work together
              seamlessly to deliver exceptional results on time and within
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Philosophy</h2>
            <p className="text-gray-600">
              We believe in creating spaces that enhance your everyday living
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {philosophies.map((philosophy) => (
              <div key={philosophy.title} className="flex flex-col">
                <div className="text-gray-800 mb-6">{philosophy.icon}</div>
                <h3 className="text-2xl font-light mb-4">{philosophy.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Custom Solutions</h2>
            <p className="text-gray-600">
              We&apos;ve gone beyond traditional renovation by designing our own
              exclusive products
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              In our continuous pursuit of perfection, we&apos;ve developed our
              own line of custom-designed products that address the unique
              challenges and opportunities in bathroom and kitchen spaces. These
              innovative solutions are born from years of hands-on experience
              and listening carefully to our clients&apos; needs.
            </p>

            <p>
              From space-saving storage solutions to custom fixtures that blend
              form and function, our proprietary designs help make your
              renovation truly one-of-a-kind. We&apos;re constantly thinking
              about how to elevate the everyday experience of these essential
              spaces, creating products that solve problems you might not even
              realize you had.
            </p>

            <p>
              Our team works tirelessly to ensure these custom elements
              integrate seamlessly with your overall design, providing both
              practical benefits and aesthetic appeal. It&apos;s just one more
              way we demonstrate our care and commitment to creating truly
              exceptional spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light mb-6">Our Values</h2>
            <p className="text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col">
                <div className="text-gray-800 mb-4">{value.icon}</div>
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and start your
            journey to the perfect kitchen or bathroom.
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

export default AboutPage;
