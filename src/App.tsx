import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from 'uuid'


export type taskPT = {
    id: string
    title: string
    isDone: boolean
}

function App() {

    const tasks1: taskPT[] = [
        {id: v1(), title: 'person1', isDone: false},
        {id: v1(), title: 'person2', isDone: false},
        {id: v1(), title: 'person3', isDone: false},
        {id: v1(), title: 'person4', isDone: false},
    ]

    const tasks2: taskPT[] = [
        {id: v1(), title: 'valuable1', isDone: false},
        {id: v1(), title: 'valuable2', isDone: false},
        {id: v1(), title: 'valuable3', isDone: false},
        {id: v1(), title: 'valuable4', isDone: false},
    ]


    return (
        <div className="App">
            <Todolist title={"TS"} tasks={tasks1}/>
            <Todolist title={"CSS"} tasks={tasks2}/>
        </div>
    );
}

export default App;
