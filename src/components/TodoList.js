import React, {useContext} from 'react';
import TodosContext from '../context'

export default function () {
    const {state, dispatch} = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` :
    "Nothing To Do";

    return (
        <div className="container mx-auto max-w-md text-center font-mono">
            <h1 className="text-bold">{title}</h1>
            <ul className="list-reset text-white p-0">
                {state.todos.map(todo => (
                    <li 
                        key ={todo.id}
                        className="flex items-center bg-red-500 border-black border-dashed border-2 my-2 py-4"
                        >
                        <span 
                            onDoubleClick={() => dispatch({type: "TOGGLE_TODO", payload: todo})}
                            className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through"}`}>
                            {todo.text}</span>
                        <button onClick={() => dispatch({type: "SET_CURRENT_TODO", payload: todo})} className="pr-6">Edit</button>
                        <button onClick={() => dispatch({type: "REMOVE_TODO", payload: todo})}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}