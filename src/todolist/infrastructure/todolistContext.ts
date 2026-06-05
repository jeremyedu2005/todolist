import { createContext, type Dispatch } from 'react';
import type { TodolistType } from '../domain/TodolistType.ts';
import type { TodolistDispatchType } from '../domain/TodolistDispatchType.ts';

export const TodolistContext = createContext<TodolistType | undefined>(undefined);
export const TodolistDispatchContext = createContext<Dispatch<TodolistDispatchType> | undefined>(undefined);
