import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded-md bg-[#2E3141] text-white px-6 py-3 text-lg tracking-wider shadow-md hover:bg-[#3C3F54] transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
