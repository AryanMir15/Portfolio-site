import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, X, Send } from "lucide-react";
import NavbarCom from "./HomePage/Sections/Navbar";
import Footer from "./HomePage/Sections/Footer";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('EShWf0EqJ2utBwst6');

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    // Enhanced validation
    if (!formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Email and message are required' });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name || 'Anonymous',
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        'service_fczz522',      // Service ID
        'template_ntn0mh3',     // Template ID
        templateParams
      );

      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus({
        type: 'error',
        message: err.message || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavbarCom />
      <main className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white transition-colors duration-500">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question or want to work together? Send me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-[#0e0e0e] rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${status.type === 'error'
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0e0e0e] text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                    aria-label="Your name (optional)"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0e0e0e] text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                    aria-label="Your email (required)"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0e0e0e] text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                    aria-label="Your message (required)"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out if you have any questions, collaboration
                  ideas, or just want to say hi!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white dark:bg-[#0e0e0e] rounded-lg border border-gray-200 dark:border-gray-700">
                    <Mail className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:tanzeelmir112@gmail.com"
                      className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      tanzeelmir112@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="font-medium mb-3">Connect with me</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/tanzeelmir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0e0e0e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>

                    <a
                      href="https://linkedin.com/in/tanzeelmir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0e0e0e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://x.com/tanzeelmir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#0e0e0e] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                      aria-label="X (Twitter)"
                    >
                      <X size={18} />
                      <span>X (Twitter)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactMe;
