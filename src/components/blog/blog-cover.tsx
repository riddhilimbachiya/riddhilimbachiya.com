'use client';
import { BlogPost } from "@/lib/blog";

const coverColors: Record<string, { bg: string; text: string; accent: string;  pattern: string }> = {
  'Design Systems': { bg: 'bg-sky-900/10', text: 'text-sky-900', accent: 'text-sky-900/60', pattern: 'rgb(161 161 170)' },
  AI: { bg: 'bg-indigo-900/10', text: 'text-indigo-900', accent: 'text-indigo-900/60', pattern: 'rgb(129 140 248)' },
  Growth: { bg: 'bg-rose-900/10', text: 'text-rose-900', accent: 'text-rose-900/60', pattern: 'rgb(251 113 133)' },
};

function getCoverStyle(tags: string[]) {
  for (const tag of tags) {
    if (coverColors[tag]) return coverColors[tag];
  }
  return { bg: 'bg-zinc-900', text: 'text-white', accent: 'text-zinc-500', border: 'border-zinc-800', pattern: 'rgb(161 161 170)' };
}

export default function BlogCover({ post }: { post: BlogPost }) {
  const style = getCoverStyle(post.frontmatter.tags);

  return (
    <div
      className={`relative aspect-[16/9] ${style.bg} rounded-lg overflow-hidden flex flex-col justify-end p-6`}
    >
      <div
        className="absolute inset-0 opacity-[0.7] origin-top-right will-change-transform transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        style={{
          backgroundImage: `radial-gradient(circle, ${style.pattern} 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
          maskImage: 'linear-gradient(to bottom left, black, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent 60%)',
        }}
      />
      <p className={`relative text-xs tracking-wide uppercase font-medium ${style.accent} mb-2`}>
        {post.frontmatter.tags[0]}
      </p>
      <h3 className={`relative text-lg font-semibold ${style.text} leading-snug`}>
        {post.frontmatter.title}
      </h3>
    </div>
  );
}