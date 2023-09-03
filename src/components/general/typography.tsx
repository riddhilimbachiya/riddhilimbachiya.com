import { twMerge } from 'tailwind-merge';
interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: string;
  component?: string;
}

type KeyValuePairProps = {
  [key: string]: string;
};

const variantsMapping: KeyValuePairProps = {
  h1: 'text-5xl tracking-[-0.3px] font-medium sm:text-3xl font-medium text-gray-900',
  h2: 'text-base tracking-[2.4px] font-bold',
  h3: 'text-2x; tracking-[0.4px] font-semibold',
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
  console.log(twMerge(variantsMapping[variant], className), 'hello');
  return (
    <Comp className={twMerge(variantsMapping[variant], className)} {...props}>
      {children}
    </Comp>
  );
};

export default Typography;
