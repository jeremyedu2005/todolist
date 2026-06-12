import type { TodolistType } from '../domain/TodolistType.ts';
import type { TodolistDispatchType } from '../domain/TodolistDispatchType.ts';

export const todolistReducer = (state: TodolistType, action: TodolistDispatchType): TodolistType => {
  switch (action.type) { 
    case 'ADD':// L'action de ADD est de pouvoir ajouter un élément dans le tableau.
      return [ // Il recupère l'ancienne liste en récupérant clé et valeur de la liste.
        ...state, //en utilisant la méthode Spreaoperator il récupère les clé et valeurs.
        {
          id: action.id, // Il utilise  la clé dynamique de l'id en mettant à jour un nouveau id pour la nouvelle tâche.
          text: action.text, // Met à jour le texte. 
          done: false,
        },
      ];
    case 'CHANGE': //Le cas de CHANGE.
      return state.map((todo) => // on met à paramètre state pour retourner les élements de la liste.
        todo.id === action.id // si en retournant la liste l'id sélectionné correspond bien à l'Id selectionné.
          ? {
              ...todo, // La méthode Spreadoperator remet à jour une nouvelle liste à jour.
              text: action.text, // La nouvelle valeur tu texte est mis à jour
            }
          : todo //sinon on affiche toujours l'ancienne liste.
      );
    case 'REMOVE':// Le cas REMOVE
      return state.filter((todo) => todo.id !== action.id);// On retourne une liste calculé en récupérant la clé ID si elle est différente de l'action 
      //elle est supprimée
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

