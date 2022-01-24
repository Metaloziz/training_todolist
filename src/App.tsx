import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {v1} from 'uuid'

type ListPT = {
    id: string
    title: string
    filter: FilterPT
}

export type FilterPT = "ALL" | "COMPLETED" | "ACTIVE"


export type TaskPT = {
    id: string
    title: string
    isDone: boolean
}

type TasksPT = {
    [key: string]: TaskPT[]
}


function App() {

    let list_one_ID = v1()
    let list_two_ID = v1()

    let [lists, setLists] = useState<ListPT[]>([
        {id: list_one_ID, title: "TS", filter: 'ALL'},
        {id: list_two_ID, title: "JS", filter: 'ALL'},
    ])


    let [tasks, setTasks] = useState<TasksPT>({
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


    const removeTaskCB = (listID: string, taskID: string) => {
        setTasks((state) => ({...state, [listID]: state[listID].filter(l => l.id !== taskID)}))
    }
    const changeFilter = (listID: string, newFilter: FilterPT) => {
        setLists(state => state.map(el => el.id === listID ? {...el, filter: newFilter} : el))
    }


    // const tasks2: taskPT[] = [
    //     {id: v1(), title: 'valuable1', isDone: false},
    //     {id: v1(), title: 'valuable2', isDone: false},
    //     {id: v1(), title: 'valuable3', isDone: false},
    //     {id: v1(), title: 'valuable4', isDone: false},
    // ]


    return (
        <div className="App">

            {lists.map(list => {
                return <Todolist key={list.id}
                                 listID={list.id}
                                 title={list.title}
                                 tasks={tasks[list.id]}
                                 filter={list.filter}
                                 removeTaskCB={removeTaskCB}
                                 changeFilter={changeFilter}/>
            })}

        </div>
    );
}

export default App;
