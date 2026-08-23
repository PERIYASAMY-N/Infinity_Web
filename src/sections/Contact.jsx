import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get In Touch" 
        />
        
        <p className="text-gray-400 mb-12 max-w-2xl">
          Let's work together
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="clean-card p-6 md:p-8 space-y-8 h-full">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-900 rounded-md border border-dark-700 text-accent-DEFAULT">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-accent-DEFAULT transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-900 rounded-md border border-dark-700 text-accent-DEFAULT">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-accent-DEFAULT transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-dark-900 rounded-md border border-dark-700 text-accent-DEFAULT">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                  <p className="text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-dark-700">
                <h4 className="text-lg font-bold text-white mb-4">Social</h4>
                <div className="flex gap-4">
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-900 rounded-md border border-dark-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-900 rounded-md border border-dark-700 text-gray-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="clean-card p-6 md:p-10 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-900 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent-DEFAULT transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-900 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent-DEFAULT transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-900 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent-DEFAULT transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-dark-900 border border-dark-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-accent-DEFAULT transition-colors resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 bg-white text-dark-900 font-semibold rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
