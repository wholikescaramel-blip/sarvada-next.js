import Image from 'next/image';

interface MoodboardCardProps {
  image: string;
  title: string;
  colorPalette: string;
  tag: string;
  backgroundColor: string;
  tagColor: string;
  titleColor: string;
  paletteColor: string;
}

function MoodboardCard({ 
  image, 
  title, 
  colorPalette, 
  tag, 
  backgroundColor,
  tagColor,
  titleColor,
  paletteColor
}: MoodboardCardProps) {
  return (
    <div 
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Moodboard Image */}
      <div 
        className="w-full overflow-hidden rounded-t-3xl"
        style={{ aspectRatio: '5/3', position: 'relative' }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '1.2',
              color: titleColor
            }}
          >
            {title}
          </h3>
          <span 
            className="px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              backgroundColor: tagColor,
              color: '#ffffff'
            }}
          >
            {tag}
          </span>
        </div>
        <p 
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: paletteColor
          }}
        >
          {colorPalette}
        </p>
      </div>
    </div>
  );
}

export default function StoriesInStyle() {
  const moodboards = [
    {
      image: "/images/b92d2910583bfc8dcb89359aafd2f86dd016cd76.png",
      title: "Romantic Garden",
      colorPalette: "Sage Green · Cream · Brown",
      tag: "Outdoor Wedding",
      backgroundColor: '#e8f0e8',
      tagColor: '#5a6d4f',
      titleColor: '#3d5034',
      paletteColor: '#6b7c62'
    },
    {
      image: "/images/bfd91f0a3fdebb9aca029a111083f9c0fbdd56d5.png",
      title: "Modern Elegance",
      colorPalette: "Champagne · White · Silver",
      tag: "Contemporary",
      backgroundColor: '#f0f4f8',
      tagColor: '#8b9aab',
      titleColor: '#4a5568',
      paletteColor: '#718096'
    },
    {
      image: "/images/d4c25a3c1fec45fc141816e3624ff60f5e865dee.png",
      title: "Traditional Splendor",
      colorPalette: "Red · Orange · Rani Pink",
      tag: "Culturally Rich",
      backgroundColor: '#fde8e8',
      tagColor: '#b55268',
      titleColor: '#8b1e3f',
      paletteColor: '#a0425d'
    },
    {
      image: "/images/c3b03526bcf73940bac2ce794dc9f7450d0e5226.png",
      title: "Bohemian Dream",
      colorPalette: "Terracotta · Sage · Cream",
      tag: "Boho Chic",
      backgroundColor: '#f5eee6',
      tagColor: '#a67c52',
      titleColor: '#6b4e3d',
      paletteColor: '#8b6f47'
    },
    {
      image: "/images/b7af2e2d9f3e213f955b165e4be92a8428f5f230.png",
      title: "Aqua Serenity",
      colorPalette: "Blue · Ivory · Teal",
      tag: "Coastal Wedding",
      backgroundColor: '#e6f3f5',
      tagColor: '#4a9aaa',
      titleColor: '#2c6b7a',
      paletteColor: '#5a8d9a'
    },
    {
      image: "/images/3cdccd8cf869d357b2159db07e72c7462c6e65c4.png",
      title: "Sunset Soirée",
      colorPalette: "Coral · Peach · Warm Gold",
      tag: "Twilight Wedding",
      backgroundColor: '#fff8e6',
      tagColor: '#d97757',
      titleColor: '#b85c3a',
      paletteColor: '#c97d5d'
    }
  ];

  return (
    <section 
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Header Area */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
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
          Stories In Style
        </h2>
        <p 
          className="max-w-2xl mx-auto"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            color: '#38322f',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          A glimpse of thoughtfully curated mood boards that bring a unique glow to every celebration.
        </p>
      </div>

      {/* Moodboard Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moodboards.map((moodboard, index) => (
            <MoodboardCard
              key={index}
              image={moodboard.image}
              title={moodboard.title}
              colorPalette={moodboard.colorPalette}
              tag={moodboard.tag}
              backgroundColor={moodboard.backgroundColor}
              tagColor={moodboard.tagColor}
              titleColor={moodboard.titleColor}
              paletteColor={moodboard.paletteColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}