import { TodolistProvider } from '../todolist/application/TodolistProvider.tsx';
import { Add } from '../todolist/components/add/Add.tsx';
import { List } from '../todolist/components/list/List.tsx';
import './App.scss';

function App() {
  return (
    <TodolistProvider>
      <Add />
      <List />
    </TodolistProvider>
  );
}

export default App;

/*
  OBJECTIF

  Créer une application React permettant de gérer une liste de tâches.
  L'application devra permetttre à l'utilisateur d'ajouter, supprimer , modifier et valider des tâches.

  FONCTIONNALITÉS

  1) Afficher une liste de tâches
  L'application doit afficher l'ensemble des tâches enregistrées.
  Chaque tâche doit contenir au minimum :
  - un identifiant unique ;
  - un libellé ;
  - un état indiquant si la tâche est terminée ou non.

  2) Ajouter une tâche
  L'utilisateur doit pouvoir saissir le texte d'une nouvelle tâche dans un champ de formulaire.
  Au clic sur un bouton ou à la validation du formulaire, la nouvelle tâche est ajouté à la liste.
  Une tâche vide ne doit pas pouvoir être ajoutée.

  3) Supprimer une tâche
  Chaque tâche doit proposer une action permettant de la supprimer de la liste.
  Après suppression, la liste affichée doit être mise à jour.

  4) Modifier une tâche
  L'utilisateur doit pouvoir modifier le libellé d'une tâche existante.
  La modification peut être réalisé directement dans la liste.
  Une fois la modification validée, le nouveau libellé doit être affiché.
  Une tâche ne doit pas pouvoir être modifiée avec un libellé vide.

  5) Valider une tâche
  L'utilisateur doit pouvoir marquer une tâche comme terminée.
  Une tâche terminée doit être visuellement differenciée d'une tâche non terminée.
  L'utilisateur doit egalement pouvoir repasser une tâche terminée à l'etat non terminé.

  6) Persister les données
  Les tâches doivent être sauvegardées dans la  session du navigateur.
  Au chargement de l'application, les tâches précédemment enregistrées doivent être récupérées.
  A Chaque ajout, supression, modification ou changement d'etat de la liste doit être mise à jour.

  BONUS

  1) Filtrer les tâches : toutes, terminées, non terminé

  2) Afficher le nombre de tâches restantes

  3) Ajouter un bouton pour supprimer toute les tâches terminées

  4) Gérer une confirmation avant suppression

  5) Améliorer l'accessibilité du formulaire et du bouton

  6) Ajouter des tests unitaires
*/
