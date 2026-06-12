import { type SubmitEvent, useState } from 'react';
import { useTodolistDispatch } from '../../infrastructure/useTodolist.ts';
import { Button } from '../../../common/components/button/Button.tsx';
import { Error } from '../../../common/components/error/Error.tsx';
import { Field } from '../../../common/components/field/Field.tsx';
import styles from './Add.module.scss';

export const Add = () => {
  const dispatch = useTodolistDispatch();
  const [text, setText] = useState('');
  const [error, setError] = useState(''); // Gestion d'erreur.

  const addTodo = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault(); // Permet de remettre l'evenement par défaut sans que la page supprime tout.
    // Une fois qu'on appuie que sur la touche entrée.

    if (text === '') {
      setError('Veuillez saisir un texte pour ajouter une tâche.');
      return;
    }

    const id = Math.random().toString(36).slice(2); // Math.random=retourne un nombre aléatoire entre zéro et un.
    // La méthode toString(36)= transforme le nombre en chaine de caractère en base 36, 36=utilise les chiffres de 0 à 9 plus les lettres de a à z.
    // slice(2)= retire les deux premiers caractères.

    dispatch({
      type: 'ADD',
      id: id,
      text: text,
    }); // Ajoute la nouvelle valeur dans le champ.

    setText(''); // Permet de remettre le champ à vide.
    setError('');
  };

  return (
    <form
      className={styles.add}
      onSubmit={addTodo}
    >
      <Field
        className={styles.field}
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" className={styles.button}>Ajouter</Button>
      <Error error={error} />
    </form>
  );
};
