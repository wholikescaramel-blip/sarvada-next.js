"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[100vh] md:h-screen w-full overflow-hidden"
    >
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover md:bg-center"
        style={{ 
          backgroundImage: `url('/images/5497f9a19d423981e767096adaac723c05e9b12d.png')`,
          backgroundPosition: 'center 20%' 
        }}
      />

      {/* Navigation Bar */}
     <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(255, 250, 244, 0.9)' }}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-4 md:py-5 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image 
              src="/images/38fc5bcc3e49edd16a18a7591438640458e76381.png"
              alt="Sarvada Events Logo"
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span 
              className="text-lg md:text-2xl"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#b55268'
              }}
            >
              Sarvada: Events
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: '26px' }}>
            <button 
              onClick={() => scrollToSection('home')}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#38322f',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#38322f',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#38322f',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>

            <button
              onClick={() => window.location.href = '/blog'}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#38322f',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              Blog
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: '#38322f',
                fontSize: '18px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              About Sarvada
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                backgroundColor: '#b55268',
                color: '#fffaf4',
                fontSize: '18px',
                padding: '12px 28px',
                borderRadius: '6px'
              }}
              className="hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#38322f" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fffaf4] px-6 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left">Portfolio</button>

             <button onClick={() => window.location.href = '/blog'} className="block w-full text-left">
              Blog
            </button>

            <button onClick={() => scrollToSection('about')} className="block w-full text-left">About Sarvada</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left font-semibold text-[#b55268]">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[90vh] md:min-h-[100vh] pb-16 md:pb-24 px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto px-8">
          <h1 
            className="mb-8 md:mb-12 text-3xl sm:text-4xl md:text-[52px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: '1.3',
              letterSpacing: '0.02em'
            }}
          >
            Celebrating Togetherness
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                backgroundColor: '#b55268',
                color: '#fffaf4',
                fontSize: '18px',
                padding: '14px 36px',
                borderRadius: '50px'
              }}
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => scrollToSection('services')}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                backgroundColor: '#fffaf4',
                color: '#b55268',
                fontSize: '18px',
                padding: '14px 36px',
                borderRadius: '50px'
              }}
              className="hover:opacity-80 transition-opacity w-full sm:w-auto"
            >
              Discover Our Services
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path 
                d="M10 15L20 25L30 15" 
                stroke="#b55268" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}