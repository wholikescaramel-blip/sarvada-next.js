import Image from 'next/image';

export default function AboutUs() {
  return (
    <section 
      id="about"
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: '#f6f1ea' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Text Content - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Column */}
          <div>
            <h2 
              className="mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                color: '#b55268',
                fontSize: '48px',
                lineHeight: '1.2'
              }}
            >
              About Us
            </h2>
            <p 
              className="mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#38322f',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              At <em>Sarvada Events</em>, we believe that every <em>celebration</em> is a <em>story</em> waiting to be told.
            </p>
            <p 
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#38322f',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              With a passion for creating unforgettable experiences, our team crafts magic which makes your <em>special day</em> truly <em>yours</em>.
            </p>
          </div>
          {/* Right Column */}
          <div>
            <p 
              className="mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#38322f',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              From intimate gatherings to grand celebrations, we specialize in transforming visions into reality.
            </p>
            <p 
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                color: '#38322f',
                fontSize: '16px',
                lineHeight: '1.8'
              }}
            >
              <em>Celebrating Togetherness</em> is not just our tagline; it's our <em>philosophy</em>. We are committed to curating moments that bring people together, leaving memories that last a lifetime.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <Image
            src="/images/1464e24e1b7700e6795611b659e1f6c5ac05bb11.png"
            alt="Wedding ceremony moment"
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}