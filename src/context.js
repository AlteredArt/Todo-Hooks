import React from 'react'


const TodosContext = React.createContext({
    todos: [
        {id: 1, text: "get the day started", complete: false},
        {id: 2, text: "feed waffles", complete: false},
        {id: 3, text: "go to the gym", complete: true}
    ]
})

export default TodosContext;