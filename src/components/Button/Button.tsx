import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size !== 'medium' ? styles[size] : '',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
} 