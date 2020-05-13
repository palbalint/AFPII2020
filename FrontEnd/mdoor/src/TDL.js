import React from 'react';
import TD from './TD'

export default function TDL({ todos,toggleTodo }) {
    return(
            todos.map(todo => {
            return <TD key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })
    )
}