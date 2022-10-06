import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid"
import {addTodo} from "../Redux/Todo/action"
export const TodoInput = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();

    const handleAdd = () => {
        const payload = {
            title,
            status: false,
            id: uuid()
        }
        console.log(payload);
        dispatch(addTodo(payload))
    }

    return (
        <div>
            <input type="text" placeholder="ADD NEW TODOS"
                value={title} onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>ADD TODOS</button>
        </div>
    )
};