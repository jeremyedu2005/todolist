import type { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
