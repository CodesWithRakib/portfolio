import React, { useState } from "react";
import { FiCalendar, FiClock, FiArrowRight, FiX } from "react-icons/fi";

const articles = [
  {
    id: 1,
    title: "Optimizing React Performance in Large-Scale Applications",
    excerpt:
      "Practical strategies for identifying and fixing performance bottlenecks in complex React applications.",
    fullDescription:
      "In this article, we dive deep into React performance optimization techniques including memoization, lazy loading, code splitting, and avoiding unnecessary re-renders to boost large app responsiveness.",
    date: "May 15, 2023",
    readTime: "8 min read",
    tags: ["React", "Performance", "Frontend"],
    image: "https://i.ibb.co/S4HtS7wj/React-app-performance.jpg",
  },
  {
    id: 2,
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Architecture patterns and best practices for creating maintainable Node.js microservices.",
    fullDescription:
      "Explore how to design and build scalable microservices using Node.js, covering topics such as service discovery, API gateways, containerization, and fault tolerance.",
    date: "March 28, 2023",
    readTime: "12 min read",
    tags: ["Node.js", "Microservices", "Backend"],
    image: "https://i.ibb.co/WW8YNTYV/microservices.png",
  },
  {
    id: 3,
    title: "The Complete Guide to JWT Authentication",
    excerpt:
      "Implementing secure authentication with JSON Web Tokens from frontend to backend.",
    fullDescription:
      "This guide explains how to implement JWT authentication securely, including token creation, storage, verification, and best security practices across frontend and backend.",
    date: "January 10, 2023",
    readTime: "10 min read",
    tags: ["Security", "Authentication", "Full Stack"],
    image: "https://i.ibb.co/scbR6x6/hq720.jpg",
  },
];

// Modal component for article details
const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          aria-label="Close modal"
        >
          <FiX className="w-6 h-6" />
        </button>
        <h2
          id="modal-title"
          className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          {article.title}
        </h2>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {article.fullDescription}
        </p>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-indigo-600 dark:text-indigo-400" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-indigo-600 dark:text-indigo-400" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Articles
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge and insights about web development
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-indigo-600 dark:text-indigo-400" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="text-indigo-600 dark:text-indigo-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <button
                  onClick={() => openModal(article)}
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors duration-200 group"
                >
                  Read Article
                  <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-200"
          >
            View All Articles
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Article Details Modal */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={closeModal}
        article={selectedArticle}
      />
    </section>
  );
};

export default BlogSection;
