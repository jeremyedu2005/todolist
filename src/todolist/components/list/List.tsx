import { useTodolist } from '../../infrastructure/useTodolist.ts';
import { Todo } from '../todo/Todo.tsx';
import styles from './List.module.scss';

export const List = () => {
  const list = useTodolist();

  console.log('list', list);

  return (
    <div className={styles.list}>
      {list && list.length > 0 ? ( // on utilise la condition si la liste est supérieur à 0
        list.map(
          (
            todo // Utiliser map pour parcourir les éléments du tableau.
          ) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
          )
        )
      ) : (
        //alors
        <p>La liste vide.</p>
      )}
    </div>
  );
};
