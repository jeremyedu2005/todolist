export type TodolistDispatchType =// permet de dispatcher les méthodes 
  | { type: 'ADD'; id: string; text: string } //Selectionne le type pour ajouter une tâche 
   // en selectionnant la clé id et en ajoutant la valeur au text en choisissant le text
  | { type: 'CHANGE'; id: string; text: string }
  | { type: 'REMOVE'; id: string }// Selectionne la clé id pour pour supprimer la tâche selectionner
  | { type: 'TOGGLE'; id: string };//Selectionne la clé id pour vérifier si la tâche a été validé ou pas.

  // chaque type ADD,CHANGE,REMOVE,TOGGLE sont déclarès dans un switch pour écouter la méthode qu'il faut faire
