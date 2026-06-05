import { type SubmitEvent, useState } from 'react';
import { useTodolistDispatch } from '../../infrastructure/useTodolist.ts';
import { Button } from '../../../common/components/button/Button.tsx';
import { Error } from '../../../common/components/error/Error.tsx';
import type { TodoType } from '../../domain/TodolistType.ts';
import styles from './Todo.module.scss';

export const Todo = ({ id, text, done }: TodoType) => {
  const dispatch = useTodolistDispatch();
  const [todo, setTodo] = useState({ id, text });
  const [isChange, setChange] = useState(false);
  const [error, setError] = useState('');

  const changeTodo = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todo.text === '') {
      setError('Veuillez saisir un texte pour ajouter une tâche.');
      return;
    }

    dispatch({
      type: 'CHANGE',
      id: todo.id,
      text: todo.text,
    });

    setChange(false);
    setError('');
  };

  const removeTodo = (id: string) =>
    dispatch({
      type: 'REMOVE',
      id: id,
    });

  const toggleTodo = (id: string) =>
    dispatch({
      type: 'TOGGLE',
      id: id,
    });

  return (
    <div className={[styles.todo, done ? ` ${styles.done}` : ''].join('')}>
      <input
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => toggleTodo(id)} /* Change l’état de l’élement grâce à la clé id. */
      />
      {isChange ? (
        <form onSubmit={changeTodo}>
          <input
            type="type"
            id={id}
            value={todo.text}
            onChange={(e) => setTodo({ id: id, text: e.target.value })}
          />
          <Button type="submit">Enregistrer</Button>
          <Error error={error} />
        </form>
      ) : (
        <>
          <label
            htmlFor={id}
            className={styles.label}
          >
            {todo.text}
          </label>
          <Button onClick={() => setChange(true)}>Modifier</Button>
        </>
      )}
      <Button onClick={() => removeTodo(id)} /* Supprime l’élement grâce à la clé id. */>Supprimer</Button>
    </div>
  );
};
