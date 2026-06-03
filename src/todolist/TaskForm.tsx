import { useState } from "react";


export const TaskForm = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input
                placeholder="ajouter une tâche"
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </input>
            <button onClick={() => {
                setText(""); ({
                })

            }}> Ajouter
            </button>
        </div>
    )


}

