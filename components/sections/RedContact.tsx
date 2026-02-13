'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Marquee from '@/components/Marquee';

export default function RedContact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xlgwgwed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
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

  return (
    <section id="contact" ref={ref} className="relative bg-white py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-0 left-0 right-0 py-4 hidden sm:block">
        <Marquee
          text="✦ GET IN TOUCH ✦ LET'S WORK TOGETHER ✦"
          speed={30}
          direction="left"
          className="text-black/5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider"
          repeat={4}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-3 sm:mb-4">
            Let's Build Something Powerful.
          </h2>
          <p className="text-base sm:text-lg text-black/60 mb-8 sm:mb-12">
            Ready to elevate your brand? Let's create something extraordinary together.
          </p>

          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center p-8 bg-black/5 rounded-sm border-2 border-black/10 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
              <p className="text-black/60 text-center mb-6">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-black text-white font-semibold rounded-sm hover:bg-[#B91C1C] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black/20 rounded-sm text-sm sm:text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors duration-300 disabled:opacity-50"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black/20 rounded-sm text-sm sm:text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors duration-300 disabled:opacity-50"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black/20 rounded-sm text-sm sm:text-base text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors duration-300 resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold text-base sm:text-lg rounded-sm hover:bg-[#B91C1C] transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-[#B91C1C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
