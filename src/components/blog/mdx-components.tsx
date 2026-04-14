import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (React.isValidElement(children) && children.props?.children) {
    return extractText(children.props.children);
  }
  return '';
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  const HeadingComponent = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = extractText(children);
    const id = slugify(text);

    return (
      <Tag id={id} className="scroll-mt-24" {...props}>
        {children}
      </Tag>
    );
  };

  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
}

function MdxImage(props: React.ComponentPropsWithoutRef<typeof NextImage>) {
  return (
    <figure className="my-8">
      <NextImage
        className="rounded-xl border border-zinc-200"
        width={800}
        height={450}
        {...props}
        alt={props.alt || ''}
      />
      {props.alt && (
        <figcaption className="mt-2 text-center text-sm text-zinc-500">
          {props.alt}
        </figcaption>
      )}
    </figure>
  );
}

function MdxLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href || '#'} {...rest}>
      {children}
    </NextLink>
  );
}

function MdxPre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <div className="relative group">
      <pre {...props} />
    </div>
  );
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: MdxLink,
  img: MdxImage as any,
  pre: MdxPre,
  Image: MdxImage,
};
