import './App.css';
import { Button } from './common/ui/button/Button';
import { type SubmitEvent, useState } from 'react';
import todolist from "./todolist/todolist";
import { type TodolistType } from './todolist/TodolistType';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [value, setValue] = useState(""); // utilise pour le formulaire car les valeurs changent lorsque nous introduisons du nouveau contenu dans le formulaire
  const [todos, setTodos] = useState<TodolistType>(todolist);// utile pour le tableau afin de mettre à jour les élements de la liste

  console.log(todolist);

  const deleteTodo = (id: string) => {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id))
  }

  const addTodo = (text: string) => { //Création de nouvelle tâche 
    const id = Math.random().toString(36).slice(2); // Math.random=retourne un nombre aléatoire entre zéro et un.  La mérthode toString(36)= transforme le nombre en chaine de caractère en base 36, 36=utilise les chiffres de 0 à 9 plus les lettres de a à z. slice(2)= retire les deux premiers caractères 

    const newTodo = {// on crée les objets en nommant une nouvelle constante pour les nouvelles tâches
      id: id,
      text: text,
      done: false
    }

    setTodos((todo) => [...todo, newTodo])
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault(); //permet de remettre l'evenement par défaut sans que la page supprime tout
    addTodo(value);// ajoute la  nouvelle valeur dans le champ
    setValue("");//permet de remettre le champ à vide
  }

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>{count}</Button>
      <Button onClick={() => setCount2((count2) => count2 + 1)}>{count2}</Button>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Ajouter une tâche'
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}>
          </input>

          <button type="submit"> Ajouter</button>
        </form>
      </div>

      {todos && todos.length > 0 ? ( // condition if 
        <ul>
          {todos.map(todo => (// utilisé map pour parcourir les éléments du tableau
            <li key={todo.id}>
              {todo.text}
              <Button onClick={() => deleteTodo(todo.id)}>supprimer</Button>
            </li>
          ))}
        </ul>
      ) : <p>Liste vide</p>}
    </>
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
Les tâches doivent être sauvegardées dans le session du navigateur.
Au chargement de l'application, les tâches précédemment enregistrées doivent être récupérées.
A Chaque ajout, supression, modification ou changement d'etat de la liste doit être mise à jour.

BONUS

1) Filtrer les tâches : toutes, terminées, non terminé 

2) Afficher le nombre de tâches restantes 

3) Ajouter un bouton pour supprimer toute les tâches terminées 

4) Gérer une confirmation avant suppression

5) Améliorer l'accessibilité du formulaire et du bouton

6) Ajouter des tests unitaires 


UTILE pour le rapport de stage
Contrat d'interface
la norme RGAA
pour faire appel à du javascript remettre les accolades {}
Pour créer une condition if faire ceci {blabla &&  et pour démontrer le else faire ceci ):<p> ceci n'est pas une liste}
... spraid 

https://fr.react.dev/learn/updating-arrays-in-state
*/
