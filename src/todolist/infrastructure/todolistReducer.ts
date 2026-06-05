import type { TodolistType } from '../domain/TodolistType.ts';
import type { TodolistDispatchType } from '../domain/TodolistDispatchType.ts';

export const todolistReducer = (state: TodolistType, action: TodolistDispatchType): TodolistType => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case 'CHANGE':
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              text: todo.text,
            }
          : todo
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
    default:
      return state;
  }
};
