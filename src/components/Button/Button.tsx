import styles from './Button.module.css';
import { type ReactNode } from 'react';

interface Props {
  children:  ReactNode;
  variant?:  'primary' | 'secondary' | 'outline';
  onClick?:  () => void;
  href?:     string;
  type?:     'button' | 'submit';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  type = 'button',
  className = '',
}: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}