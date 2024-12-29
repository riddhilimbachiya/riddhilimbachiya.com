import { twMerge } from 'tailwind-merge';

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: string;
  component?: string;
}

type KeyValuePairProps = {
  [key: string]: string;
};

const variantsMapping: KeyValuePairProps = {
  h1: 'text-3xl tracking-[-0.3px] font-medium sm:text-5xl font-medium text-gray-900',
  h2: 'text-2xl tracking-[0.36px] font-semibold',
  h3: 'text-xl font-semibold',
  body1: 'text-base text-gray-900',
  body2: 'text-xs text-gray-900',
};

let elementMapping: KeyValuePairProps = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'p' | 'span';

const Typography = ({
  variant,
  children,
  component,
  className,
  ...props
}: TypographyProps) => {
  const Comp = (
    component ? component : variant ? elementMapping[variant] : 'p'
  ) as ComponentElement;
  return (
    <Comp className={twMerge(variantsMapping[variant], className)} {...props}>
      {children}
    </Comp>
  );
};

export default Typography;
