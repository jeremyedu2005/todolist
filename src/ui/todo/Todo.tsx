import { useState } from "react";
import { Button } from "../../common/ui/button/Button";

interface TodoProps {
  id: string;
  text: string;
  done: boolean;
}

export const Todo = ({ id, text, done }: TodoProps) => {
  const [todos, setTodos] = useState<TodosType>(todolist);// utile pour le tableau afin de mettre à jour les élements de la liste
  const completeTodo = (id: string) => { // on récupère l'ID
    setTodos(previousTodos => previousTodos.map(todo => //  parcours le tableau pour vérifier la tâche
      todo.id === id ? { ...todo, done: !todo.done } : todo // vérifie que la tâche est cochée.
      // sinon par défaut la tache n'est pas fini
    ))
  }

  return (
    <div>
      {text}
      <div>
        <input
          type='checkbox'
          checked={done}
          onChange={() => completeTodo(id)}>
        </input>
        <label>{done ? "terminé" : "non terminé" /*vérifie que l'état est vrai ou faux*/}</label>
      </div>
      <Button onClick={() => deleteTodo(id)}/*supprime l'élement grâce à la clé id*/>supprimer</Button>
      <Button onClick={() => setEditTask(id)}/*cible la tâche que l'on souhaite modifier*/>modifier </Button>
    </div>
  );
}