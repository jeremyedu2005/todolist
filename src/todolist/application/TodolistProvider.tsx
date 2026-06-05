import { type ReactNode, useReducer } from 'react';
import { TodolistContext, TodolistDispatchContext } from '../infrastructure/todolistContext.ts';
import { todolistReducer } from '../infrastructure/todolistReducer.ts';
import { defaultTodolist } from './defaultTodolist.ts';

export const TodolistProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todolistReducer, defaultTodolist);

  return (
    <TodolistContext value={state}>
      <TodolistDispatchContext value={dispatch}>{children}</TodolistDispatchContext>
    </TodolistContext>
  );
};
