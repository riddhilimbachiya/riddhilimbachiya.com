'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import React from 'react';
import NextLink from 'next/link';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (React.isValidElement(node) && node.props?.children) {
    return extractText(node.props.children);
  }
  return '';
}

function HeadingRenderer(level: number) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return function Heading({ children }: { children?: React.ReactNode }) {
    const text = extractText(children);
    const id = slugify(text);
    return <Tag id={id} className="scroll-mt-24">{children}</Tag>;
  };
}

export default function BlogContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: HeadingRenderer(1),
        h2: HeadingRenderer(2),
        h3: HeadingRenderer(3),
        h4: HeadingRenderer(4),
        h5: HeadingRenderer(5),
        h6: HeadingRenderer(6),
        a: ({ href, children, ...rest }) => {
          const isExternal = href?.startsWith('http');
          if (isExternal) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                {children}
              </a>
            );
          }
          return <NextLink href={href || '#'} {...rest}>{children}</NextLink>;
        },
        pre: ({ children, ...rest }) => (
          <div className="relative group">
            <pre {...rest}>{children}</pre>
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
