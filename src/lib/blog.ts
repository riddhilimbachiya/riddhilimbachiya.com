import fs from 'fs';
import path from 'path';

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  coverImage: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blogs');

function parseFrontmatter(fileContent: string): {
  data: Record<string, any>;
  content: string;
} {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { data: {}, content: fileContent };

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s: string) => s.trim().replace(/^["']|["']$/g, ''));
    }

    if (value === 'true') value = true;
    if (value === 'false') value = false;

    data[key] = value;
  }

  return { data, content };
}

function calcReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = parseFrontmatter(fileContent);

  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    frontmatter,
    content,
    readingTime: frontmatter.readingTime || calcReadingTime(content),
  };
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractTocFromContent(content: string): TocItem[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[`*_~]/g, '');
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    items.push({ id, text, level });
  }

  return items;
}

export function getAllBlogs(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => getBlogBySlug(slug))
    .filter(
      (post): post is BlogPost => post !== null && post.frontmatter.published
    )
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}
