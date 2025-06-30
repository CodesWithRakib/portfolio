import React from "react";
import { FiStar } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content:
      "Rakib delivered our e-commerce platform ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are truly remarkable. We've seen a 40% increase in conversions since launch.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, StartupHub",
    content:
      "Working with Rakib on our SaaS product was a game-changer. He not only implemented complex features flawlessly but also provided valuable architectural insights that saved us months of development time.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director of Engineering, DigitalAgency",
    content:
      "Rakib's full-stack expertise helped us solve performance bottlenecks in our application. His solutions reduced our API response times by 300ms across the board. Highly recommended for complex technical challenges.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO, InnovateTech",
    content:
      "Exceptional work from Rakib. He transformed our legacy system into a modern, scalable application with perfect execution and minimal downtime.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Lead, CreativeMinds",
    content:
      "Collaborating with Rakib was a pleasure. He understands the balance between technical excellence and user experience like few developers do.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Client{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Testimonials
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            What people I’ve worked with say about my work.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings} className="pb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="px-3 md:px-4"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                data-aos-duration="700"
              >
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl h-full flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 dark:border-indigo-400"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
