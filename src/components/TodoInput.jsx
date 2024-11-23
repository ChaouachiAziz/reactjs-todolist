import { useState } from "react";

export default function TodoInput(props) {
    const {handleTodosAdd, todoValue, setTodoValue} = props;
    
    return(
       <header>
        <input value={todoValue} onChange={(e) =>{
            setTodoValue(e.target.value)  
        }}  placeholder="What todo..." />
        <button onClick={() => {
            handleTodosAdd(todoValue)
            setTodoValue('')
        }}>Add Todo</button>
       </header>
    )
}