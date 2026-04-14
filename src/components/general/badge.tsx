interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 ${className}`}>
      {children}
    </span>
  );
}
