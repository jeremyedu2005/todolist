import type { TodolistType } from '../domain/TodolistType.ts';

export const defaultTodolist: TodolistType = [
  {
    id: '0',
    text: 'Ma première tâche.',
    done: false,
  },
];
