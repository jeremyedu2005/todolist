import type { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // type n'a trois que à 3 type button submit reset
  className?: string;
}

export const Button = ({ children, onClick, type = 'button', className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={[styles.button, className ? ` ${className}` : ""].join("")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
//children est un mot clé par défaut appelé props 