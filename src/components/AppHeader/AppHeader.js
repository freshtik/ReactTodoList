import React from "react"
import './AppHeader.css'

const AppHeader = ({toDo, done}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Todo list</h1>
            <h2>{toDo} more todo </h2>
        </div>
    );
};

export default AppHeader;