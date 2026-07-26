'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `There's new inquery.\n \nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCountry: ${formData.country}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6584381441?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary-navy)] focus:ring-2 focus:ring-[var(--color-primary-navy)]/10 outline-none transition-all text-sm text-gray-800 bg-gray-50/50"
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
            Mobile Number *
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary-navy)] focus:ring-2 focus:ring-[var(--color-primary-navy)]/10 outline-none transition-all text-sm text-gray-800 bg-gray-50/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary-navy)] focus:ring-2 focus:ring-[var(--color-primary-navy)]/10 outline-none transition-all text-sm text-gray-800 bg-gray-50/50"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
            Country *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter country"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary-navy)] focus:ring-2 focus:ring-[var(--color-primary-navy)]/10 outline-none transition-all text-sm text-gray-800 bg-gray-50/50"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter message..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary-navy)] focus:ring-2 focus:ring-[var(--color-primary-navy)]/10 outline-none transition-all text-sm text-gray-800 bg-gray-50/50 resize-none"
        ></textarea>
      </div>

      {/* Centered Submit Button with Real WhatsApp Icon */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          <svg className="w-5 h-5 fill-current shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="tracking-wide text-base">Send via WhatsApp</span>
          <Send className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  );
}
