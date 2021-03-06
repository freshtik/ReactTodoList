import React from "react"

import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({ todos, onDeleted,
                      onToggleImportant,
                      onToggleDone}) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={item.id} className='list-group-item'>
                <TodoListItem
                    { ...itemProps } onDeleted={()=>onDeleted(item.id)}
                    onToggleImportant={()=>onToggleImportant(item.id)}
                    onToggleDone={()=>onToggleDone(item.id)}/>
            </li>

        )
    })

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    )
}

export default TodoList;