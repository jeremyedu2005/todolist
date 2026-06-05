import type { TodoType } from '../../domain/TodolistType.ts';
import { useTodolistDispatch } from '../../infrastructure/useTodolist.ts';
import { Button } from '../../../../common/components/button/Button.tsx';
import styles from './Todo.module.scss';

export const Todo = ({ todo }: { todo: TodoType }) => {
  const dispatch = useTodolistDispatch();

  const toggleTodo = (id: string) =>
    dispatch({
      type: 'TOGGLE',
      id: id,
    });

  const removeTodo = (id: string) =>
    dispatch({
      type: 'REMOVE',
      id: id,
    });

  return (
    <div className={todo.done ? styles.done : ''}>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)} /* Change l’état de l’élement grâce à la clé id. */
      />
      <label
        htmlFor={todo.id}
        className={styles.label}
      >
        {todo.text}
      </label>
      <Button onClick={() => removeTodo(todo.id)} /* Supprime l’élement grâce à la clé id. */>Supprimer</Button>
    </div>
  );
};
