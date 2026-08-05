import type { Metadata } from 'next';
import { getAllBlogs } from '@/lib/blog';
import Typography from '@/components/general/typography';
import Badge from '@/components/general/badge';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import BlogCover from '@/components/blog/blog-cover';
import { ArrowRight } from 'iconoir-react';

export const metadata: Metadata = {
  title: 'Blog | Riddhi Limbachiya',
  description:
    'Writing on product thinking, UX design, frontend engineering, and AI integration — from 8 years building B2B SaaS products at startups.',
  alternates: { canonical: 'https://riddhilimbachiya.com/blog' },
  openGraph: {
    title: 'Blog | Riddhi Limbachiya',
    description:
      'Writing on product thinking, UX design, frontend engineering, and AI integration — from 8 years building B2B SaaS products at startups.',
    url: 'https://riddhilimbachiya.com/blog',
    images: [{ url: '/images/open-graph-riddhi.png', width: 1200, height: 630, alt: 'Riddhi Limbachiya – Senior Design/Product Engineer' }],
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full max-w-7xl max-lg:px-4 pt-16 pb-24">
        <div className="mb-16">
          <Typography variant="h1" className="mb-4">
            Blog
          </Typography>
          <Typography
            variant="body1"
            className="text-zinc-500 text-lg">
            Writing on product thinking, UX design, frontend engineering, and AI integration — from 8 years building B2B SaaS products at startups.
          </Typography>
          <p className="text-sm text-zinc-400 mt-3">
            Also sharing shorter thoughts on{' '}
            <Link
              href="https://www.linkedin.com/in/riddhi-limbachiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 underline underline-offset-4 decoration-zinc-300 hover:text-zinc-900 hover:decoration-zinc-500 transition-colors">
              LinkedIn
            </Link>
            .
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24">
            <Typography variant="body1" className="text-zinc-400">
              No posts yet. Check back soon.
            </Typography>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-6 overflow-hidden hover:border-zinc-300 hover:scale-[1.02] transition-[border-color,transform] duration-300 ease-out">
                <BlogCover post={post} />

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-400 justify-between">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    {/* <span>·</span> */}
                    <span>{post.readingTime}</span>
                  </div>

                  {/* <h2 className="text-xl font-semibold text-zinc-900">
                    {post.frontmatter.title}
                  </h2> */}

                  <p className="text-zinc-600 text-sm leading-relaxed line-clamp-2">
                    {post.frontmatter.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.frontmatter.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 text-sm font-medium text-zinc-900">
                    Read article
                <ArrowRight height={14} width={14} aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-1"/>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
      <Footer variant="light" />
    </div>
  );
}
