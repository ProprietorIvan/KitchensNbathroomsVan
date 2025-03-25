import React, { useState, useEffect, ReactNode, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Create a simple Card component instead of importing to avoid circular references
interface TestimonialCardProps {
  children: ReactNode;
  className?: string;
}

const TestimonialCard = ({ children, className }: TestimonialCardProps) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Emily Chen",
      role: "Kitchen Renovation Client",
      text: "Working with Cloud Bathrooms and Kitchens was an exceptional experience. Their minimalist design approach transformed our outdated kitchen into a stunning, functional space that perfectly matches our lifestyle. The attention to detail was impressive.",
      image: "/photos/reviews/1.jpg",
    },
    {
      name: "James Wilson",
      role: "Bathroom Remodel Client",
      text: "The team at Cloud delivered our dream bathroom on time and on budget. Their clean, elegant design has completely transformed our master bathroom into a spa-like retreat. The craftsmanship is impeccable.",
      image: "/photos/reviews/2.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "Full Home Renovation",
      text: "We renovated both our kitchen and two bathrooms with Cloud, and the results exceeded our expectations. Their design vision and execution were flawless. The spaces flow beautifully and the minimalist aesthetic has brought such calm to our home.",
      image: "/photos/reviews/3.jpg",
    },
    {
      name: "David Park",
      role: "Kitchen Client",
      text: "Cloud's attention to detail is unmatched. From the initial design consultation to the final touches, every aspect of our kitchen renovation was handled with precision and care. The custom cabinetry is exactly what we wanted.",
      image: "",
    },
    {
      name: "Sarah Johnson",
      role: "Bathroom Renovation",
      text: "Our bathroom renovation was completed on schedule and the results are stunning. The team was professional, communicative, and accommodating of our requests throughout the process. I wouldn't hesitate to recommend Cloud.",
      image: "",
    },
    {
      name: "Michael Thompson",
      role: "Kitchen and Bath Client",
      text: "Cloud transformed both our kitchen and master bathroom with their sleek, minimalist designs. The spaces are not only beautiful but incredibly functional. The team's professionalism and craftsmanship were evident at every stage.",
      image: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= reviews.length - (reviewsToShow.desktop - 1)
        ? 0
        : nextIndex;
    });
  }, [reviews.length, reviewsToShow.desktop]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - reviewsToShow.desktop : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

  // Schema markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cloud Bathrooms and Kitchens Vancouver",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      datePublished: new Date().toISOString().split("T")[0],
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
    })),
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light mb-6">Client Testimonials</h2>
          <p className="text-gray-600 mb-4">
            See what our clients have to say about their renovation experience
          </p>
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
            ))}
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <TestimonialCard className="bg-gray-50 p-8 h-full rounded-none transition-all duration-300">
                    <div className="flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-gray-900 text-gray-900 inline-block mr-1"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="flex-grow mb-6">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </blockquote>

                      {/* Reviewer Info */}
                      <div className="flex items-center">
                        {review.image ? (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
                            <Image
                              src={review.image}
                              alt={review.name}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                            <span className="text-sm font-light text-gray-600">
                              {review.name[0]}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </TestimonialCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors p-2"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors p-2"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Review Link */}
        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/MPxhuzL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
