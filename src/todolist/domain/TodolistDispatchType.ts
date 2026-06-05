export type TodolistDispatchType =
  | { type: 'ADD'; id: string; text: string }
  | { type: 'CHANGE'; id: string; text: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'TOGGLE'; id: string };
