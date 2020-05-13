import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TDL from './TDL';
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'
function App() {
  const [todos,setTodos]= useState([])
  const todosNameRef = useRef()

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function hangleClearTodos(){
    const newTodos = todos.filter(todo =>todo.complete)
    setTodos(new todos)
  }
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    setTodos()
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(e) {
   const name = todosNameRef.current.value
    if (name == ' ') {
      setTodos(prevTodos => {
        return [...prevTodos,{id: uuidv4(), name:name,complete:false}]
      })
      todosNameRef.current.value = null
      
    }
  }
  return (
    <>
      
      <TDL todos={todos} toggleTodo={toggleTodo} />
      <input ref = {todosNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={hangleClearTodos}>Clear Complete</button>
      
      
    </>
  );
}

export default App;
