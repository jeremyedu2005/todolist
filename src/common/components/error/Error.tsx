import type { ReactNode } from 'react';
import styles from './Error.module.scss';
//ce fichier permet d'afficher un message d'erreur quand le champ d'ajouter une tâche est vide
export const Error = ({ error }: { error: ReactNode }) => {
  return error && <p className={styles.error}>{error}</p>;
};
