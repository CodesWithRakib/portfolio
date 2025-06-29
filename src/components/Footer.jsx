import React, { useState } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";

const privacyContent = (
  <>
    <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
    <p className="mb-2">
      We value your privacy and are committed to protecting your personal
      information. This Privacy Policy explains how we collect, use, and
      safeguard your data.
    </p>
    <p className="mb-2">
      <strong>Information Collection:</strong> We collect information you
      provide directly to us when you contact us or use our services.
    </p>
    <p className="mb-2">
      <strong>Use of Information:</strong> We use your data to respond to
      inquiries, improve our services, and comply with legal requirements.
    </p>
    <p className="mb-2">
      <strong>Data Security:</strong> We implement security measures to protect
      your data from unauthorized access.
    </p>
    <p className="mb-2">
      For full details, please contact us or visit our website.
    </p>
  </>
);

const termsContent = (
  <>
    <h2 className="text-xl font-bold mb-4">Terms of Service</h2>
    <p className="mb-2">
      By accessing or using our portfolio site, you agree to comply with these
      Terms of Service.
    </p>
    <p className="mb-2">
      <strong>Use License:</strong> You may view, download, and print content
      for personal, non-commercial use only.
    </p>
    <p className="mb-2">
      <strong>Limitation of Liability:</strong> We are not liable for any
      damages arising from the use of this site.
    </p>
    <p className="mb-2">
      <strong>Changes:</strong> We may update these terms at any time without
      prior notice.
    </p>
    <p className="mb-2">For full terms, please contact us.</p>
  </>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      onClick={onClose}
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
          <X className="w-6 h-6" />
        </button>
        <div id="modal-title" className="text-2xl font-bold mb-4">
          {title}
        </div>
        <div className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Branding */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Rakode
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Building innovative digital experiences with cutting-edge
                technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#" },
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="mailto:codeswithrakib@gmail.com"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    codeswithrakib@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+880 176 747 6724"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    +880 176 747 6724
                  </a>
                </li>
                <li>Dinajpur, Bangladesh</li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/codeswithrakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/codeswithrakib"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  aria-label="Email"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-200 dark:border-gray-800 my-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {currentYear} Rakode. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="Privacy Policy"
      >
        {privacyContent}
      </Modal>

      {/* Terms Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setTermsOpen(false)}
        title="Terms of Service"
      >
        {termsContent}
      </Modal>
    </>
  );
};

export default Footer;
