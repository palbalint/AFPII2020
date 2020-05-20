import React from 'react';
import TodoForm from "./TDL/TodoForm";


export default class TodoList extends React.Component{

    state ={
        todos: []
    };

    addTodo = todo => {
        this.setState(state => ({
          todos: [todo, ...state.todos]
        }));
      };


    render(){
        return( <div>
            <TodoForm onSubmit={this.addTodo}/>
            <div key ={todo.id}> {todo.text}</div>
            </div>
        );
    }
}