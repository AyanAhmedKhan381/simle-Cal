import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'common' | 'action';
  className?: string;
};

export const Button = ({
  children,
  variant = 'common',
  className = '',
  ...props
}: Props) => {
  const styles = useMemo(
    () =>
      clsx([
        {
          'bg-orange-500 text-gray-100 hover:bg-orange-700':
            variant === 'action',
        },
        {
          'bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-gray-300':
            variant === 'common',
        },
      ]),
    [variant],
  );

  return (
    <button
      {...props}
      className={clsx([
        'inline-flex md:h-20 md:w-20 h-16 w-16 items-center justify-center rounded-full text-2xl md:text-3xl',
        'transition-all duration-300 ease-in-out',
        styles,
        className,
      ])}
    >
      {children}
    </button>
  );
};
