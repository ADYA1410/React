import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let[todos,setTodos]=useState([{task : 'simple task' , id:uuidv4()}])
    let[newTodo,setNewTodo]=useState('');

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task : newTodo,id : uuidv4()}]
        })
        setNewTodo('');
    }

    let updateTodoValue=(e)=>{
        setNewTodo(e.target.value);
    }

    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter(
            (prevTodos)=>{
              return  prevTodos.id != id;
            }
        ))
    }
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            &nbsp;
            <button onClick={addNewTask}>Add task</button>
            <br /><hr/>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>{
                    return (<li key={todo.id}>{todo.task}
                    &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button></li>)
                })}
            </ul>
        </div>
    )
}