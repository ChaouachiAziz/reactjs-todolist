import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue , setTodoValue] = useState('');

  function keeDAta(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

    function handleTodosAdd(newTodo){
      const newTodoList = [...todos , newTodo]
      keeDAta(newTodoList)
      setTodos(newTodoList)
    }

    function handleTodosDelete(index){
        const newTodoList = todos.filter((todos, todosIndex) => {
          return todosIndex !== index
        })
        keeDAta(newTodoList)
        setTodos(newTodoList)
    }

    function handleTodosEdit(index){
      const valueToEdit = todos[index]
      setTodoValue(valueToEdit)
      handleTodosDelete(index)
    }


   useEffect(() => {
      if(!localStorage){
        return;
      }
      let localTodos = localStorage.getItem('todos')
      if (!localTodos) {
        return;
      }
      console.log(localTodos)
      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
    }, [])


  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue}
       handleTodosAdd={handleTodosAdd} />
      <TodoList handleTodosEdit={handleTodosEdit} handleTodosDelete={handleTodosDelete} todos={todos}/>
      
    </>
  )
}

export default App
