import NextLink from 'next/link';

export type LinkProps = {
  label: string;
  href: string;
};

const Link = ({ label, href }: LinkProps) => {
  return (
    <NextLink
      href={href}
      className="text-zinc-600 hover:text-zinc-950 active:text-zinc-950 text-base">
      {label}
    </NextLink>
  );
};

export default Link;
