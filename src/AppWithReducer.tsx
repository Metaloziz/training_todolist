import React, {useReducer} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from 'uuid'
import {InputArea} from "./components/InputArea/InputArea";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";


export const ALL = "ALL" as const
export const COMPLETED = "COMPLETED" as const
export const ACTIVE = "ACTIVE" as const

export type FilterPT = typeof ALL | typeof COMPLETED | typeof ACTIVE


function App() {

    let list_one_ID = v1()
    let list_two_ID = v1()

    let [lists, dispatchLists] = useReducer(todolistsReducer, [
        {id: list_one_ID, title: "TS", filter: 'ALL'},
        {id: list_two_ID, title: "JS", filter: 'ALL'},
    ])

    let [tasks, dispatchTasks] = useReducer(tasksReducer, {
        [list_one_ID]: [
            {id: v1(), title: 'person1', isDone: false},
            {id: v1(), title: 'evening', isDone: true},
            {id: v1(), title: 'hire', isDone: true},
            {id: v1(), title: 'apart', isDone: true},
        ],
        [list_two_ID]: [
            {id: v1(), title: 'universe', isDone: true},
            {id: v1(), title: 'fruit', isDone: false},
            {id: v1(), title: 'week', isDone: true},
            {id: v1(), title: 'bend', isDone: false},
        ]
    })

    const addList = (title: string) => {
        let action = addTodolistAC(title)
        dispatchLists(action)
        dispatchTasks(action)
    }
    const removeList = (listID: string) => {
        let action = removeTodolistAC(listID)
        dispatchLists(action)
        dispatchTasks(action)
    }
    const changeFilter = (listID: string, newFilter: FilterPT) => {
        dispatchLists(changeTodolistFilterAC(listID, newFilter))
    }
    const changeTitleList = (listID: string, title: string) => {
        dispatchLists(changeTodolistTitleAC(listID, title))
    }
    const addTask = (listID: string, title: string) => {
        dispatchTasks(addTaskAC(listID, title))
    }
    const removeTask = (listID: string, taskID: string) => {
        dispatchTasks(removeTaskAC(listID, taskID))
    }
    const checkBox = (listID: string, taskID: string) => {
        dispatchTasks(changeTaskStatusAC(listID, taskID))
    }
    const changeTitleTask = (listID: string, taskID: string, title: string) => {
        dispatchTasks(changeTaskTitleAC(listID, taskID, title))
    }

    return (
        <div className="App">
            <InputArea addItem={addList}/>
            {lists.map(list => {
                return <Todolist key={list.id}
                                 listID={list.id}
                                 title={list.title}
                                 tasks={tasks[list.id]}
                                 filter={list.filter}
                                 addTask={addTask}
                                 removeTaskCB={removeTask}
                                 changeFilter={changeFilter}
                                 checkBox={checkBox}
                                 removeList={removeList}
                                 changeTitleTask={changeTitleTask}
                                 changeTitleList={changeTitleList}/>
            })}

        </div>
    );
}

export default App;
