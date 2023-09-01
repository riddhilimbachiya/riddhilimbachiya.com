type TypographyProps = {
  variant: string;
  children: React.ReactNode;
  component?: string;
};

type KeyValuePairProps = {
  [key: string]: string;
};

const variantsMapping: KeyValuePairProps = {
  h1: 'text-5xl tracking-[-0.3px] font-medium sm:text-3xl',
  h2: 'text-base tracking-[2.4px] font-bold',
  h3: 'text-2x; tracking-[0.4px] font-semibold',
  body1: 'text-base',
  body2: 'text-xs',
};

let elementMapping: KeyValuePairProps = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'p' | 'span';

const Typography = ({ variant, children, component }: TypographyProps) => {
  const Comp = (
    component ? component : variant ? elementMapping[variant] : 'p'
  ) as ComponentElement;

  return <Comp className={variantsMapping[variant]}>{children}</Comp>;
};

export default Typography;
