"use client";

import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function GetAQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    vision: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mbdaobzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Thank you! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          vision: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact"
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column - Text & Contact */}
          <div className="flex flex-col justify-center">
            <h2 
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                color: '#b55268',
                fontSize: '48px',
                lineHeight: '1.2'
              }}
            >
              Get A Quote:
            </h2>
            <p 
              className="mb-12"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#38322f',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              Complete the form and our team will contact you with a personalized, no-obligation quote.
            </p>
            <h3 
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                color: '#b55268',
                fontSize: '32px',
                lineHeight: '1.2'
              }}
            >
              Contact Us:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="flex-shrink-0 mt-1" size={20} style={{ color: '#b55268' }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: '#38322f', fontSize: '16px', lineHeight: '1.6' }}>
                  info@sarvadaevents.in
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="flex-shrink-0 mt-1" size={20} style={{ color: '#b55268' }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: '#38322f', fontSize: '16px', lineHeight: '1.6' }}>
                  +91 6290383337, 7749971559
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} style={{ color: '#b55268' }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, color: '#38322f', fontSize: '16px', lineHeight: '1.6' }}>
                  Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Background Image with Form Overlay */}
          <div className="relative">
            <div 
              className="w-full h-full min-h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/a75f79ae55075a056d3e541024a88c251a5fae9d.png')`,
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center justify-center h-full p-6">
                <div 
                  className="w-full max-w-md bg-white rounded-2xl p-8"
                  style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#38322f' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        style={{ border: '1px solid #d1d5db', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#38322f' }}>
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        style={{ border: '1px solid #d1d5db', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#38322f' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        style={{ border: '1px solid #d1d5db', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#38322f' }}>
                        Event Date (dd/mm/yy)
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg"
                        style={{ border: '1px solid #d1d5db', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="vision" className="block mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '14px', color: '#38322f' }}>
                        Tell Us About Your Vision
                      </label>
                      <textarea
                        id="vision"
                        name="vision"
                        value={formData.vision}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg resize-none"
                        style={{ border: '1px solid #d1d5db', fontFamily: "'Montserrat', sans-serif", fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full"
                      style={{
                        backgroundColor: '#9a4456',
                        color: '#ffffff',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '16px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}