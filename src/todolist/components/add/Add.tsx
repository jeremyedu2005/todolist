import { type SubmitEvent, useState } from 'react';
import { useTodolistDispatch } from '../../infrastructure/useTodolist.ts';
import { List } from '../list/List.tsx';
import { Button } from '../../../common/components/button/Button.tsx';
import { Error } from '../../../common/components/error/Error.tsx';

export const Todolist = () => {
  const dispatch = useTodolistDispatch();
  const [text, setText] = useState('');
  const [error, setError] = useState(''); // Gestion d'erreur.

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault(); // Permet de remettre l'evenement par défaut sans que la page supprime tout.
    // Une fois qu'on appuie que sur la touche entrée.

    if (text === '') {
      setError('Veuillez saisir un texte pour ajouter une tâche.');
      return;
    }

    const id = Math.random().toString(36).slice(2); // Math.random=retourne un nombre aléatoire entre zéro et un. La méthode toString(36)= transforme le nombre en chaine de caractère en base 36, 36=utilise les chiffres de 0 à 9 plus les lettres de a à z. slice(2)= retire les deux premiers caractères.

    dispatch({
      type: 'ADD',
      id: id,
      text: text,
    }); // Ajoute la nouvelle valeur dans le champ.

    setText(''); // Permet de remettre le champ à vide.
    setError('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Ajouter une tâche"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button type="submit">Ajouter</Button>
        <Error error={error} />
      </form>
    </>
  );
};
