import type { TodolistType } from '../../domain/TodolistType.ts';
import { Todo } from '../todo/Todo.tsx';

export const List = ({ list }: { list: TodolistType }) => {
  console.log('list', list);

  return (
    <div>
      {list.map(
        (
          todo // Utiliser map pour parcourir les éléments du tableau.
        ) => (
          <Todo
            key={todo.id}
            todo={todo}
          />
        )
      )}
    </div>
  );
};
