import Image from 'next/image';

interface ImageCardProps {
  image: string;
  alt: string;
}

function ImageCard({ image, alt }: ImageCardProps) {
  return (
    <div 
      className="overflow-hidden rounded-3xl"
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        aspectRatio: '16/11',
        position: 'relative'
      }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}

export default function EventAesthetics() {
  return (
    <section 
      id="portfolio"
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Header Area */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
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
          Event Aesthetics
        </h2>
        <p 
          className="max-w-3xl mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: '#38322f',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          A curated glimpse into the styles, moods, and celebrations that inspire our approach to event planning.
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ImageCard image="/images/2de624e41bdc06312b8670f35bbccfb045eacbca.png" alt="Event aesthetic 1" />
          <ImageCard image="/images/69dfc31527385eee5eda9aff54e2a5241d9cc728.png" alt="Event aesthetic 2" />
          <ImageCard image="/images/65de2e49e44abb7823f1b09956a9dac542d7004a.png" alt="Event aesthetic 3" />
          <ImageCard image="/images/e7957e0b6cdc7c8474a28bf1dcfb39e61fcbfa19.png" alt="Event aesthetic 4" />
          <ImageCard image="/images/f57e2371f7037366d17da820014c8d3fac0ed094.png" alt="Event aesthetic 5" />
          <ImageCard image="/images/5652450b2165b35f601a0a8be2c6dcdf3256db62.png" alt="Event aesthetic 6" />
          <ImageCard image="/images/621338e85e728f10b54180e99dcd863a211dbc73.png" alt="Event aesthetic 7" />
          <ImageCard image="/images/beaaa50ab4c3b79373b6056d76eb6f7f0a453c8a.png" alt="Event aesthetic 8" />
          <ImageCard image="/images/6ac1dfdb1b8adb49685a0985cff0f2bc8ef78bf7.png" alt="Event aesthetic 9" />
        </div>
      </div>
    </section>
  );
}