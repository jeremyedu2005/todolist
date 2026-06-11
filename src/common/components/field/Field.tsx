import styles from './Field.module.scss';

interface FieldProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  checked?: boolean;
  onChange: (e: { target: { value: string } }) => void;
  type?: 'checkbox' | 'button' | 'text';
}

export const Field = ({ id, className, placeholder, checked, value, onChange, type = 'text' }: FieldProps) => {
  return (
    <input
      id={id}
      type={type}
      className={[styles.field, className ? ` ${className}` : ''].join('')}
      placeholder={placeholder}
      checked={checked}
      value={value}
      onChange={onChange}
    />
  );
};
