import type { ReactNode } from 'react';
import styles from './Error.module.scss';

export const Error = ({ error }: { error: ReactNode }) => {
  return error && <p className={styles.error}>{error}</p>;
};
