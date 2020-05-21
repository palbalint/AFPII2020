import React from 'react';
import Todo from "components/TDL/Todo";
import TodoForm from "components/TDL/TodoForm";

import UserNavbar from "components/Navbars/UserNavbar";
import ContactHeader from "components/Headers/ContactHeader";


export default class TodoList extends React.Component{

    state ={
        todos: [],todoToShow:"all"
    };

    addTodo = todo => {
        this.setState(state => ({
          todos: [todo, ...state.todos]
        }));
      };
      toggleComplete=(id) =>{
        this.setState({
            todos: this.state.todos.map(todo =>{
                if (todo.id === id ) {
                    return{id:todo.id,
                    text: todo.text,
                    complete:!todo.complete
                };
              }else{
                    return todo;
                }
            })
        });
    }

    updateTodoToShow = (s) =>{
      this.setState({
          todoToShow:s
      });
    };
    handleDeleteTodo = id => {
      this.setState(state => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }));
    };
    removeAllTodosThatAreComplete = () => {
      this.setState(state => ({
        todos: state.todos.filter(todo => !todo.complete)
      }));
    };

    render(){
        let todos = [];
        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }
        else if (this.state.todoToShow === "active") {
            this.state.todos.filter(todo=> !todo.complete);
        }
        else if (this.state.todoToShow === "complete") {
            this.state.todos.filter(todo=> todo.complete);
        }
        return( 
          <>
          <UserNavbar />
          <ContactHeader />
              <div>
                  <TodoForm onSubmit={this.addTodo}/>
                  {todos.map(todo =>(
                      <Todo
                      key={todo.id} 
                      toggleComplete={() => this.toggleComplete(todo.id)}
                      todo={todo}
                      onDelete={() => this.handleDeleteTodo(todo.id)}
                      />
                  ))}
                  <div>Todos left: {this.state.todos.filter(todo=> !todo.complete).length}</div>
                  <div>
                      <button onClick={() => this.updateTodoToShow("all")}>all</button>
                      <button onClick={() => this.updateTodoToShow("active")}>active</button>
                      <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
                  </div>
                  {this.state.todos.some(todo => todo.complete) ? (
                  <div>
                      <button onClick={this.removeAllTodosThatAreComplete}>Removel all complete</button>
                  </div>
                  ): null}
              </div>
              </>
        );
    }
}