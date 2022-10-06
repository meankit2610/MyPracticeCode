import React from "react"
import {useSelector} from "react-redux"
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
    const todos = useSelector((state) => state.todo.todo);


    return (
        <div>
            <TodoInput></TodoInput>
            <br />
            {todos.map((todo)=>(
            <TodoItem key={todo.id} {...todo}/>
            ))}
        </div>
    )
}