export interface TodoType {// on Initialise les objets avec des clés et valeurs
  id: string;
  text: string;
  done: boolean;
}

export type TodolistType = TodoType[]; //Convertit en un tableau contenant des objets
