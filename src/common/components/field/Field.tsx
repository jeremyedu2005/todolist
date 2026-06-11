import styles from './Field.module.scss';

interface FieldProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: { target: { value: string } }) => void;
  type?: 'checkbox' | 'button' | 'text';
}

export const Field = ({ id, className, placeholder, value, onChange, type = 'text' }: FieldProps) => {
  return (
    <input
      id={id}
      type={type}
      className={[styles.field, className ? ` ${className}` : ''].join('')}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
