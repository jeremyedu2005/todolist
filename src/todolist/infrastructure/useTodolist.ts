import { useContext } from 'react';
import { TodolistContext, TodolistDispatchContext } from './todolistContext.ts';
//ce fichier permet de séparer tâches de l'application
export const useTodolist = () => {
  const context = useContext(TodolistContext);

  if (!context) {
    throw new Error('useTodolist doit être utilisé à l’intérieur de TodolistProvider');
  }

  return context;
};// permet d'afficher la liste et performant pour éviter d'utiliser useConstext plusieurs fois

export const useTodolistDispatch = () => {
  const context = useContext(TodolistDispatchContext);

  if (!context) {
    throw new Error('todolistDispatchContext doit être utilisé à l’intérieur de TodolistProvider');
  }

  return context;
};//permet d'utiliser les méthodes
