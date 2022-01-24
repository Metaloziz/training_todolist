import React from "react";
import {FilterPT, TaskPT} from "../../App";
import {Tasks} from "../Tasks/Tasks";


type TodolistPT = {
    listID: string
    title: string
    tasks: TaskPT[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    changeFilter: (listID: string, newFilter: FilterPT) => void
}


export const Todolist = (props: TodolistPT) => {


        const changeFilterCB = (filter: FilterPT) => {
            props.changeFilter(props.listID, filter)
        }


        return (
            <div>
                <h3>{props.title}
                </h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <Tasks listID={props.listID} filter={props.filter} tasks={props.tasks} removeTaskCB={props.removeTaskCB}/>
                <div>
                    <button onClick={() => changeFilterCB("ALL")}>All</button>
                    <button onClick={() => changeFilterCB("ACTIVE")}>Active</button>
                    <button onClick={() => changeFilterCB("COMPLETED")}>Completed</button>
                </div>
            </div>
        )
            ;
    }
;