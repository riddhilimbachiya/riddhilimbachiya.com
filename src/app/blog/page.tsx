import { getAllBlogs, BlogPost } from '@/lib/blog';
import Typography from '@/components/general/typography';
import Badge from '@/components/general/badge';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Riddhi Limbachiya',
  description:
    'Thoughts on frontend engineering, design systems, AI interfaces, and building products from 0 to 1.',
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const coverColors: Record<string, { bg: string; text: string; accent: string }> = {
  'Design Systems': { bg: 'bg-zinc-900', text: 'text-white', accent: 'text-zinc-500' },
  AI: { bg: 'bg-indigo-900/80', text: 'text-white', accent: 'text-indigo-100' },
  Frontend: { bg: 'bg-zinc-900', text: 'text-white', accent: 'text-zinc-500' },
  RAG: { bg: 'bg-zinc-100', text: 'text-zinc-900', accent: 'text-zinc-400' },
  LLMs: { bg: 'bg-zinc-100', text: 'text-zinc-900', accent: 'text-zinc-400' },
};

function getCoverStyle(tags: string[]) {
  for (const tag of tags) {
    if (coverColors[tag]) return coverColors[tag];
  }
  return { bg: 'bg-zinc-900', text: 'text-white', accent: 'text-zinc-500' };
}

function BlogCover({ post }: { post: BlogPost }) {
  const style = getCoverStyle(post.frontmatter.tags);

  return (
    <div className={`aspect-[16/9] ${style.bg} rounded-lg overflow-hidden flex flex-col justify-end p-6`}>
      <p className={`text-[11px] uppercase tracking-[0.15em] font-medium ${style.accent} mb-2`}>
        {post.frontmatter.tags[0]}
      </p>
      <h3 className={`text-lg font-semibold ${style.text} leading-snug`}>
        {post.frontmatter.title}
      </h3>
    </div>
  );
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
            Thoughts on UX, frontend engineering, AI integration and building
            products.
          </Typography>
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
                  <div className="flex items-center gap-3 text-sm text-zinc-400">
                    <time dateTime={post.frontmatter.date}>
                      {formatDate(post.frontmatter.date)}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-zinc-900">
                    {post.frontmatter.title}
                  </h2>

                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {post.frontmatter.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {post.frontmatter.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 text-sm font-medium text-zinc-900">
                    Read article
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                      aria-hidden="true">
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
