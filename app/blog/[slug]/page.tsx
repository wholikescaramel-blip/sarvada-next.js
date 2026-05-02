import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Sarvada Events`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.sarvadaevents.in/blog/${post.slug}`,
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  console.log("STATIC PARAMS:", posts.map(p => p.slug));
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split('\n')
    .filter((line) => line.trim() !== '');

  return (
    <main style={{ backgroundColor: '#fffaf4', minHeight: '100vh' }}>
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-6 pt-12">
        <Link
          href="/blog"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '13px',
            color: '#b55268',
            textDecoration: 'none',
            letterSpacing: '0.05em'
          }}
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Post Header */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-10">
        <p
          className="mb-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '12px',
            color: '#b55268',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          {new Date(post.date).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'long', year: 'numeric'
          })}
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            color: '#38322f',
            fontSize: '42px',
            lineHeight: '1.25',
            marginBottom: '16px'
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: '#6b5f59',
            fontSize: '16px',
            lineHeight: '1.8'
          }}
        >
          {post.description}
        </p>
        <div style={{ height: '1px', backgroundColor: '#e8dcd6', marginTop: '32px' }} />
      </div>

      {/* Post Content */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        {paragraphs.map((line, i) => {
          if (line.startsWith('# ')) {
            return null;
          } else if (line.startsWith('## ')) {
            return (
              <h2 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#b55268', fontSize: '32px', lineHeight: '1.3', marginTop: '48px', marginBottom: '16px' }}>
                {line.replace('## ', '')}
              </h2>
            );
          } else if (line.startsWith('### ')) {
            return (
              <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#38322f', fontSize: '24px', lineHeight: '1.3', marginTop: '32px', marginBottom: '12px' }}>
                {line.replace('### ', '')}
              </h3>
            );
          } else if (line.startsWith('**') && line.endsWith('**')) {
            return (
              <p key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#38322f', fontSize: '15px', lineHeight: '1.8', marginBottom: '12px' }}>
                {line.replace(/\*\*/g, '')}
              </p>
            );
          } else if (line.startsWith('---')) {
            return <div key={i} style={{ height: '1px', backgroundColor: '#e8dcd6', margin: '40px 0' }} />;
          } else if (line.startsWith('*') && line.endsWith('*')) {
            return (
              <p key={i} style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic', color: '#6b5f59', fontSize: '14px', lineHeight: '1.8', marginBottom: '12px' }}>
                {line.replace(/\*/g, '')}
              </p>
            );
          } else if (line.startsWith('- ')) {
            return (
              <p key={i} style={{ fontFamily: "'Montserrat', sans-serif", color: '#38322f', fontSize: '15px', lineHeight: '1.8', marginBottom: '8px', paddingLeft: '16px' }}>
                • {line.replace('- ', '')}
              </p>
            );
          } else {
            const withLinks = line.replace(
              /\[([^\]]+)\]\(([^)]+)\)/g,
              `<a href="$2" style="color:#b55268;text-decoration:underline;">$1</a>`
            );
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: withLinks }}
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#38322f', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}
              />
            );
          }
        })}
      </div>

      {/* CTA Footer */}
      <div className="py-16 px-6 text-center" style={{ backgroundColor: '#f6f1ea' }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#b55268', fontSize: '32px', marginBottom: '12px' }}>
          Planning a wedding in Jaipur?
        </h3>
        <p style={{ fontFamily: "'Montserrat', sans-serif", color: '#38322f', fontSize: '15px', lineHeight: '1.8', marginBottom: '24px' }}>
          Talk to our team for a free consultation.
        </p>
        <Link
          href="/#contact"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            backgroundColor: '#b55268',
            color: '#fffaf4',
            fontSize: '18px',
            padding: '14px 36px',
            borderRadius: '50px',
            textDecoration: 'none'
          }}
        >
          Get Free Consultation
        </Link>
      </div>
    </main>
  );
}