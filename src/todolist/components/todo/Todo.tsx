import { type SubmitEvent, useState } from 'react';
import { useTodolistDispatch } from '../../infrastructure/useTodolist.ts';
import { Button } from '../../../common/components/button/Button.tsx';
import { Error } from '../../../common/components/error/Error.tsx';
import type { TodoType } from '../../domain/TodolistType.ts';
import styles from './Todo.module.scss';
import { Field } from '../../../common/components/field/Field.tsx';

export const Todo = ({ id, text, done }: TodoType) => {
  const dispatch = useTodolistDispatch(); // faire appel toujours à useTodolisDispatch afin de préciser la méthode que l'on veut utiliser
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
      <Field
        type="checkbox"
        id={id}
        checked={done}
        onChange={() => toggleTodo(id)} /* Change l’état de l’élement grâce à la clé id. */
      />
      {isChange ? (
        <form
          className={styles.form}
          onSubmit={changeTodo}
        >
          <Field
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
