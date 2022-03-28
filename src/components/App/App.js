import React from "react"

import "./App.css"
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";


export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [ ],
        itemSearch: ''
    }

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label: label,
            important: false,
            done: false
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        //generate id
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [ ...todoData, newItem ];

            return {
                todoData: newArr
            }
        })
    };

    toggleProperty(arr, id, propName) {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
            }

        return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    onSearchChange = (item) => {
        this.setState(({itemSearch}) =>{
            return {
                itemSearch: item
            }
        })
    }

    search = (items, itemSearch) => {
            if (itemSearch.length === 1) return items;
        
        return items.filter((e) => {
            return e.label.indexOf(itemSearch) > -1;
        });
    }

    render() {

        const { todoData, itemSearch } = this.state

        const searchingItems = this.search(todoData, itemSearch)

        const doneCount = todoData
                            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                </div>

                <TodoList todos={searchingItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>

            </div>
        )
    }
}