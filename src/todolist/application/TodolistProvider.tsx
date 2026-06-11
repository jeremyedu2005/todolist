import { type ReactNode, useEffect, useReducer } from 'react';
import { TodolistContext, TodolistDispatchContext } from '../infrastructure/todolistContext.ts';
import { todolistReducer } from '../infrastructure/todolistReducer.ts';
import type { TodolistType } from '../domain/TodolistType.ts';
import { defaultTodolist } from './defaultTodolist.ts';
import { useLocalStorage } from '../../common/utils/useLocalStorage.ts';

export const TodolistProvider = ({ children }: { children: ReactNode }) => {
  const storage = useLocalStorage<TodolistType>('todolist', defaultTodolist);
  const [state, dispatch] = useReducer(todolistReducer, storage.get());

  useEffect(() => {
    storage.set(state);
  }, [storage, state]);

  return (
    <TodolistContext value={state}>
      <TodolistDispatchContext value={dispatch}>{children}</TodolistDispatchContext>
    </TodolistContext>
  );
};
