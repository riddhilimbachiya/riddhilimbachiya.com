import NextLink from 'next/link';

export type LinkProps = {
  label: string;
  href: string;
};

const Link = ({ label, href }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className="text-zinc-950 hover:underline hover:underline-offset-4 hover:decoration-zinc-200 active:text-zinc-950 text-base">
      {label}
    </NextLink>
  );
};

export default Link;
