import { Button } from './common/ui/button/Button';
import { type SubmitEvent, useState } from 'react';
import { type TodosType } from './domain/todolist/ui/todos/TodosType';
import { Todo } from './domain/todolist/ui/todo/Todo';
import './App.css';

const todolist: TodosType = [
  {
    id: '0',
    text: "ma première tâche",
    done: false
  },
  {
    id: '1',
    text: "ma deuxième tâche",
    done: true
  },
  {
    id: '2',
    text: "ma troisième tâche",
    done: true
  }
]

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [value, setValue] = useState(""); // utilise pour le formulaire car les valeurs changent lorsque nous introduisons du nouveau contenu dans le formulaire
  const [todos, setTodos] = useState<TodosType>(todolist);// utile pour le tableau afin de mettre à jour les élements de la liste
  const [editTask, setEditTask] = useState<string | null>(null);// proposition de claude et chatgpt afin de cibler   la tache en particuler
  const [editTaskValue, setEditTaskValue] = useState("")// il fallait ajouter un nouvel (etat car si on utilise le même index que Value pour ajouter du contenu la liste affiche la même tâche mais en doublon
  const [error, setError] = useState("");//Gestion d'erreur

  console.log(todolist);

  const addTodo = (text: string) => {
    if (value === "") {
      setError("Veuillez saisir un texte.")
      return;
    }
    setError("");

    //Création de nouvelle tâche 
    const id = Math.random().toString(36).slice(2); // Math.random=retourne un nombre aléatoire entre zéro et un.  
    // La mérthode toString(36)= transforme le nombre en chaine de caractère en base 36, 36=utilise les chiffres de 0 à 9 plus les lettres de a à z. 
    // slice(2)= retire les deux premiers caractères 

    const newTodo = {// on crée les objets en nommant une nouvelle constante pour les nouvelles tâches
      id: id, //rendre l'id dynamique
      text: text,
      done: false
    }

    setTodos((todo) => [...todo, newTodo])
  }

  const deleteTodo = (id: string) => {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id))
    //filter est utilisé afin de filtrer les élements compris dans le tableau afin d'utiliser l'id pour le supprimer
    // et de renvoyer un tableau  à jour
  }

  const validateEdit = (id: string) => {
    if (editTaskValue.trim() === "") {
      setError("Veuillez compléter le champ"); // affiche l'erreur la personne n'introduit rien dans le champ
      return; // ← on arrête juste la fonction
    }
    setError(""); // ← on efface l'erreur si tout va bien
    setTodos(newTask => newTask.map(newTask => //parcours le tableau pour mette à jour la tâche
      newTask.id === id ? { ...newTask, text: editTaskValue } : newTask
    ))
    setEditTask(null)
  }

  const completeTodo = (id: string) => { // on récupère l'ID
    setTodos(previousTodos => previousTodos.map(todo => //  parcours le tableau pour vérifier la tâche
      todo.id === id ? { ...todo, done: !todo.done } : todo // vérifie que la tâche est cochée.
      // sinon par défaut la tache n'est pas fini
    ))
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault(); //permet de remettre l'evenement par défaut sans que la page supprime tout 
    // une fois qu'on appuie que sur la touche entrée
    addTodo(value);// ajoute la  nouvelle valeur dans le champ
    setValue("");//permet de remettre le champ à vide
    setEditTaskValue("");//remettre le champ à vide
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
        {error && <p>{error}</p>}
      </div>

      {todos && todos.length > 0 ? ( // condition if 
        <ul>
          {todos.map(todo => (// utiliser  map pour parcourir les éléments du tableau
            <>
              <li key={todo.id} >
                {todo.id === editTask ?  /* On crée une condition if si on souhaite modifier la tâche*/
                  <div>
                    <input
                      placeholder='modifier la tâche'
                      type='text'
                      value={editTaskValue} /* mon ancienne idée {value} mais doublon*/
                      onChange={(e) => setEditTaskValue(e.target.value)} />
                    <Button onClick={() => validateEdit(todo.id)/*permet d'ajouter à la liste la nouvelle tâche */}>Valider</Button>
                    {error && <p>{error}</p>}
                  </div>
                  : todo.text}
                <div>
                  <input
                    type='checkbox'
                    checked={todo.done}
                    onChange={() => completeTodo(todo.id)}>
                  </input>
                  <label>{todo.done ? "terminé" : "non terminé" /*vérifie que l'état est vrai ou faux*/}</label>
                </div>
                <Button onClick={() => deleteTodo(todo.id)}/*supprime l'élement grâce à la clé id*/>supprimer</Button>
                <Button onClick={() => setEditTask(todo.id)}/*cible la tâche que l'on souhaite modifier*/>modifier </Button>

              </li>
              <Todo />
            </>
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
https://fr.legacy.reactjs.org/docs/lists-and-keys.html
https://codelynx.dev/posts/ternaire-en-react
*/
