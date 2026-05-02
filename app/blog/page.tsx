import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sarvada Events — Wedding Planning Tips & Guides',
  description: 'Wedding planning tips, venue guides, and Rajasthani wedding traditions from the team at Sarvada Events, Jaipur.',
  openGraph: {
    title: 'Blog | Sarvada Events',
    description: 'Wedding planning tips, venue guides, and Rajasthani wedding traditions from Sarvada Events.',
    url: 'https://www.sarvadaevents.in/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ backgroundColor: '#fffaf4', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#f6f1ea' }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: '#b55268',
            fontSize: '52px',
            lineHeight: '1.2',
            marginBottom: '16px'
          }}
        >
          Our Blog
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#38322f',
            fontSize: '16px',
            lineHeight: '1.8',
            maxWidth: '520px',
            margin: '0 auto'
          }}
        >
          Wedding planning guides, venue tips, and Rajasthani traditions — written from real experience.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
              style={{ textDecoration: 'none' }}
            >
              <div
                className="h-full rounded-2xl p-8 transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  border: '1px solid #f0e8e2'
                }}
              >
                {/* Date */}
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '12px',
                    color: '#b55268',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>

                {/* Title */}
                <h2
                  className="mb-4 group-hover:opacity-75 transition-opacity"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    color: '#38322f',
                    fontSize: '26px',
                    lineHeight: '1.3'
                  }}
                >
                  {post.title}
                </h2>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#6b5f59',
                    fontSize: '14px',
                    lineHeight: '1.7'
                  }}
                >
                  {post.description}
                </p>

                {/* Read More */}
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#b55268',
                    letterSpacing: '0.05em'
                  }}
                >
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}