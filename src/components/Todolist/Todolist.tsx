import React, {MouseEvent} from "react";
import {ACTIVE, ALL, COMPLETED, FilterPT, TaskPT} from "../../App";
import {Tasks} from "../Tasks/Tasks";
import {InputArea} from "../InputArea/InputArea";
import s from './Todolist.module.css'


type TodolistPT = {
    listID: string
    title: string
    tasks: TaskPT[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    changeFilter: (listID: string, newFilter: FilterPT) => void
    addTask: (listID: string, title: string) => void
    checkBox: (listID: string, taskID: string) => void
    removeList: (listID: string) => void
}


export const Todolist = (props: TodolistPT) => {


        const changeFilterCB = (event: MouseEvent<HTMLButtonElement>) => {

            let filter: FilterPT = ALL
            if (event.currentTarget.id === ACTIVE) filter = ACTIVE
            if (event.currentTarget.id === COMPLETED) filter = COMPLETED

            props.changeFilter(props.listID, filter)
        }

        const removeListCB = () => {
            props.removeList(props.listID)
        }

        // test verification

        return (
            <div>
                <h3>{props.title}</h3>
                <button onClick={removeListCB}>x</button>
                <div>
                    <InputArea addTask={props.addTask} listID={props.listID}/>
                </div>
                <Tasks
                    listID={props.listID}
                    filter={props.filter}
                    tasks={props.tasks}
                    removeTaskCB={props.removeTaskCB}
                    checkBox={props.checkBox}/>
                <div>
                    <button id={ALL}
                            className={props.filter === ALL ? s.button : ""}
                            onClick={changeFilterCB}>All
                    </button>
                    <button id={ACTIVE}
                            className={props.filter === ACTIVE ? s.button : ""}
                            onClick={changeFilterCB}>ACTIVE
                    </button>
                    <button id={COMPLETED}
                            className={props.filter === COMPLETED ? s.button : ""}
                            onClick={changeFilterCB}>COMPLETED
                    </button>
                </div>
            </div>
        )
            ;
    }
;