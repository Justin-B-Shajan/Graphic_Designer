'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
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
        setFormData({ name: '', email: '', projectType: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className={`text-4xl sm:text-5xl font-bold scroll-animate ${isVisible ? 'visible' : ''}`}>
            Get In{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto scroll-animate scroll-animate-delay-100 ${isVisible ? 'visible' : ''}`}>
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 scroll-animate scroll-animate-delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 p-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:justinbshajan324@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    justinbshajan324@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 p-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+971527718668"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    +971 527718668
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 p-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-400">Dubai , United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10 animate-in fade-in duration-500">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 text-center">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 bg-white/10 hover:bg-white/20 text-white"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Your Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Project Type</label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10 text-white">
                    <SelectItem value="branding">Brand Identity</SelectItem>
                    <SelectItem value="poster">Poster Design</SelectItem>
                    <SelectItem value="ui">UI/UX Design</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Your Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                size="lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && (
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
