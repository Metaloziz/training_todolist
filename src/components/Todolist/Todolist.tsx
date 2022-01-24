import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from "react";
import {ACTIVE, ALL, COMPLETED, FilterPT, TaskPT} from "../../App";
import {Tasks} from "../Tasks/Tasks";


type TodolistPT = {
    listID: string
    title: string
    tasks: TaskPT[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    changeFilter: (listID: string, newFilter: FilterPT) => void
    addTask: (listID: string, title: string) => void
}


export const Todolist = (props: TodolistPT) => {

        let [title, setTitle] = useState<string>('')

        const changeTaskTitleCB = (event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.currentTarget.value)
        }


        const addTaskCB = () => {
            if (title) {
                props.addTask(props.listID, title.trim())
                setTitle('')
            }
        }

        const addTaskForEnter = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                if (title) {
                    props.addTask(props.listID, title.trim())
                    setTitle('')
                }
            }
        }
        const changeFilterCB = (event: MouseEvent<HTMLButtonElement>) => {

            let filter: FilterPT = ALL
            if (event.currentTarget.id === ACTIVE) filter = ACTIVE
            if (event.currentTarget.id === COMPLETED) filter = COMPLETED

            props.changeFilter(props.listID, filter)
        }


        return (
            <div>
                <h3>{props.title}
                </h3>
                <div>
                    <input value={title}
                           onChange={changeTaskTitleCB}
                           onKeyPress={addTaskForEnter}/>
                    <button onClick={addTaskCB}>+</button>
                </div>
                <Tasks listID={props.listID} filter={props.filter} tasks={props.tasks} removeTaskCB={props.removeTaskCB}/>
                <div>
                    <button id={ALL} onClick={changeFilterCB}>All</button>
                    <button id={ACTIVE} onClick={changeFilterCB}>Active</button>
                    <button id={COMPLETED} onClick={changeFilterCB}>Completed</button>
                </div>
            </div>
        )
            ;
    }
;