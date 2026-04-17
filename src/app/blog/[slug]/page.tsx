import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { NavArrowLeft } from 'iconoir-react';

import { getAllBlogSlugs, getBlogBySlug } from '@/lib/blog';
import BlogContent from '@/components/blog/blog-content';
import Typography from '@/components/general/typography';
import Badge from '@/components/general/badge';
import Footer from '@/components/layout/footer';

interface PageProps {
  params: { slug: string };
}

const tagStyles = {
  h2: `
    prose-h2:text-[28px] prose-h2:font-bold prose-h2:text-gray-900
    prose-h2:mt-16 prose-h2:mb-6 prose-h2:leading-tight prose-h2:tracking-tight
  `,
  h3: `
    prose-h3:text-xl prose-h3:font-bold prose-h3:text-gray-900
    prose-h3:mt-12 prose-h3:mb-5 prose-h3:leading-snug
  `,
  h4: `
    prose-h4:text-lg prose-h4:font-semibold prose-h4:text-gray-800
    prose-h4:mt-8 prose-h4:mb-3
  `,
  p: `
    prose-p:text-base prose-p:text-gray-600
    prose-p:leading-[1.85] prose-p:my-5
  `,
  a: `
    prose-a:text-gray-700 prose-a:underline prose-a:underline-offset-4
    prose-a:decoration-gray-300 hover:prose-a:text-gray-900
    hover:prose-a:decoration-gray-900 prose-a:font-normal
    prose-a:transition-colors
  `,
  strong: `prose-strong:font-semibold prose-strong:text-gray-900`,
  em: `prose-em:text-gray-600`,
  ul: `prose-ul:my-5 prose-ul:pl-1`,
  ol: `prose-ol:my-6 prose-ol:pl-1 prose-ol:space-y-4`,
  li: `
    prose-li:text-gray-600 prose-li:leading-[1.85]
    prose-li:my-1 marker:text-gray-400
  `,
  blockquote: `
    prose-blockquote:border-l-[3px] prose-blockquote:border-gray-200
    prose-blockquote:pl-5 prose-blockquote:text-gray-500
    prose-blockquote:italic prose-blockquote:font-normal
    prose-blockquote:my-7 prose-blockquote:not-italic
  `,
  hr: `prose-hr:border-gray-200 prose-hr:my-12`,
  code: `
    prose-code:text-gray-800
  `,
  pre: `
    prose-pre:bg-gray-50 prose-pre:text-gray-900
    prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200
    prose-pre:my-8 prose-pre:py-5 prose-pre:px-6
    prose-pre:text-sm prose-pre:leading-relaxed
  `,
  img: `prose-img:rounded-xl prose-img:my-8`,
  table: `
    prose-table:text-sm prose-th:text-left prose-th:text-gray-800
    prose-th:border-gray-200 prose-th:p-3
    prose-td:text-gray-600 prose-td:border-gray-200 prose-td:p-3
    prose-td:border prose-th:border
  `,
};

const proseClasses = [
  'prose max-w-none font-inter',
  ...Object.values(tagStyles),
].join(' ');

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.frontmatter.title} | Riddhi Limbachiya`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      images: post.frontmatter.coverImage
        ? [{ url: post.frontmatter.coverImage }]
        : [],
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-[780px] mx-auto px-6 max-lg:px-4">
        <Link href="/blog">
          <Typography
            variant="body2"
            className="hover:text-gray-800 flex items-center gap-2 pt-8">
            <NavArrowLeft height={14} width={14} aria-hidden="true" />
            Back to all posts
          </Typography>
        </Link>

        <article className="flex flex-col gap-8 py-16 group">
          <div className="flex gap-3 items-center">
            {post.frontmatter.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            <time dateTime={post.frontmatter.date} className="text-gray-600">
              <Typography variant="body1" className="flex gap-2 items-center text-sm">
                {formatDate(post.frontmatter.date)}
              </Typography>
            </time>
          </div>

          <header className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl leading-tight font-bold text-gray-900">
              {post.frontmatter.title}
            </h1>
            <p className="text-xl text-gray-500">
              {post.frontmatter.description}
            </p>
          </header>

          <div className={proseClasses}>
            <BlogContent content={post.content} />
          </div>
        </article>
      </div>
      <Footer variant="light" />
    </div>
  );
}
