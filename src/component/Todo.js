import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios';
const Todo = () => {
  const [todosState, setTodoState] = useState([])
  useEffect(() => {
    const getTodos = async() => {
      try{
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        )
        // console.log(res.data)
        setTodoState(res.data)
      }
      catch (error){
        console.log(error.message)
      }
    }
    getTodos()
  },[])
 const markCompleted = (id) => {
   const newTodos = todosState.map((todo) => {
     if (todo.id === id) todo.completed = !todo.completed
     return todo
   })

   setTodoState(newTodos)
 }

 const deleteTodo = async id => {
   try{
     await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
   const newTodos = todosState.filter(todo => todo.id !== id)
   setTodoState(newTodos)
   }
   catch(error){
     console.log(error.message)
   }
 }


 const addTodo =async title => {
   try{
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    const newTodos = [...todosState, res.data]
    setTodoState(newTodos)
   }
   catch(error){
    console.log(error.message)
   }
 }
    return (
      <>
      <AddTodo addTodoFunc={addTodo}/>
        {todosState.map((todo) => {
          return (
            <p>
              <TodoItems
                key={todo.id}
                todoProps={todo}
                markCompletedFunc={markCompleted}
                deleteTodoFunc={deleteTodo}
              />
            </p>
          )
        }
        )}
      </>
    )
}

export default Todo
