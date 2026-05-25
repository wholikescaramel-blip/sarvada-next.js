'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import {
  CheckSquare,
  MapPin,
  Palette,
  Users,
  Utensils,
  Plane,
  Music,
  FileText,
  Camera,
} from 'lucide-react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

function ServiceCard({ image, title, description, icon, tag }: ServiceCardProps) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden transition-all duration-500 hover:-translate-y-1"
      style={{
        width: '300px',
        height: '420px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(136,72,88,0.10)',
        cursor: 'grab',
      }}
    >
      {/* Full-bleed image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="300px"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(46,16,24,0.92) 0%, rgba(46,16,24,0.55) 45%, transparent 75%), linear-gradient(to bottom, rgba(46,16,24,0.35) 0%, transparent 30%)',
        }}
      />

      {/* Top tag */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(253,250,248,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(253,250,248,0.2)',
          borderRadius: '99px',
          padding: '4px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(253,250,248,0.9)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          {tag}
        </span>
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1.5rem 1.25rem',
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: '1.35rem',
            lineHeight: 1.2,
            color: '#FDFAF8',
            marginBottom: '0.5rem',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: '13px',
            lineHeight: 1.75,
            color: 'rgba(253,250,248,0.65)',
            letterSpacing: '0.01em',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

const services = [
  {
    image: '/images/planning.png',
    title: 'End-to-End Planning',
    description: 'From first idea to final farewell, seamlessly managed.',
    icon: <CheckSquare size={12} strokeWidth={2} />,
    tag: 'Full Service',
  },
  {
    image: '/images/0592ac80875ab9547dd0ee051dd01f75279c6945.png',
    title: 'Venue Research & Coordination',
    description: 'Finding the perfect setting that fits your vision.',
    icon: <MapPin size={12} strokeWidth={2} />,
    tag: 'Venue',
  },
  {
    image: '/images/ee06713882ac9a642360d23d9d8bbb5faed0677f.png',
    title: 'Event Styling & Décor',
    description: 'Thoughtfully designed functions that reflect your celebration.',
    icon: <Palette size={12} strokeWidth={2} />,
    tag: 'Styling',
  },
  {
    image: '/images/c7632bf6c7f00164d7755543ee61ab1684b7bb1d.png',
    title: 'Guest Experience & Hospitality',
    description: 'Warm, attentive experiences for every guest.',
    icon: <Users size={12} strokeWidth={2} />,
    tag: 'Hospitality',
  },
  {
    image: '/images/04f48726fbe0329daaff996ba0e8fece14e2e799.png',
    title: 'Catering',
    description: 'Delicacies that delight every palate.',
    icon: <Utensils size={12} strokeWidth={2} />,
    tag: 'Catering',
  },
  {
    image: '/images/33be561fe031be99efb67d0a20ea43803b1cb32e.png',
    title: 'Logistics & Travel Management',
    description: 'Smooth coordination of movement, stays, and schedules.',
    icon: <Plane size={12} strokeWidth={2} />,
    tag: 'Logistics',
  },
  {
    image: '/images/ac86fffb76c6eb2f1169e7cddf2532ba2004bcb3.png',
    title: 'Artists & Entertainment',
    description: 'Performances that elevate the mood and moment.',
    icon: <Music size={12} strokeWidth={2} />,
    tag: 'Entertainment',
  },
  {
    image: '/images/7810a7200ea5278cdaf15708ae5e2bb8f1564ae6.png',
    title: 'Invites & Event Collaterals',
    description: 'Providing cohesive invites and on-ground collaterals.',
    icon: <FileText size={12} strokeWidth={2} />,
    tag: 'Collaterals',
  },
  {
    image: '/images/06db250d606f65853d64f0645b759959dfa835c1.png',
    title: 'Photoshoot & Videography',
    description: 'Capturing memories with emotion, detail, and clarity.',
    icon: <Camera size={12} strokeWidth={2} />,
    tag: 'Photography',
  },
];

export default function OurServices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      setScrollProgress(maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
    };
    const mouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
    };
    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      slider.scrollLeft = scrollLeft - (x - startX) * 1.2;
    };
    slider.addEventListener('mousedown', mouseDown);
    slider.addEventListener('mouseleave', mouseLeave);
    slider.addEventListener('mouseup', mouseUp);
    slider.addEventListener('mousemove', mouseMove);
    return () => {
      slider.removeEventListener('mousedown', mouseDown);
      slider.removeEventListener('mouseleave', mouseLeave);
      slider.removeEventListener('mouseup', mouseUp);
      slider.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <section
      id="services"
      className="overflow-hidden"
      style={{ backgroundColor: '#FDFAF8', padding: '5rem 0' }}
    >
      {/* Header */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span
            style={{
              display: 'block',
              width: '1.5rem',
              height: '1px',
              backgroundColor: '#B06878',
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B06878',
              fontWeight: 500,
            }}
          >
            What We Offer
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              color: '#2E1018',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            Every detail,{' '}
            <em style={{ color: '#B06878', fontStyle: 'italic' }}>
              taken care of.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              color: '#9A7878',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '340px',
              letterSpacing: '0.01em',
            }}
          >
            Scroll right to explore. Every service is handled with the same focused attention.
          </p>
        </div>
      </div>

      {/* Scroll area */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-8 md:w-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #FDFAF8 0%, rgba(253,250,248,0) 100%)',
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, #FDFAF8 0%, rgba(253,250,248,0) 100%)',
          }}
        />

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-12 pb-4 cursor-grab select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-6 md:px-12 mt-6 max-w-7xl mx-auto">
        <div
          style={{
            height: '1.5px',
            width: '100%',
            backgroundColor: 'rgba(176,104,120,0.12)',
            borderRadius: '99px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${scrollProgress}%`,
              backgroundColor: '#B06878',
              borderRadius: '99px',
              transition: 'width 0.15s ease',
            }}
          />
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#9A7878',
            fontWeight: 400,
            marginTop: '0.5rem',
            textAlign: 'right',
          }}
        >
          Scroll to explore →
        </div>
      </div>
    </section>
  );
}
