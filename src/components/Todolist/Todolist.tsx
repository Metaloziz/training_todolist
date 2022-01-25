import React, {MouseEvent} from "react";
import {ACTIVE, ALL, COMPLETED, FilterPT, TaskType} from "../../App";
import {Tasks} from "../Tasks/Tasks";
import {InputArea} from "../InputArea/InputArea";
import s from './Todolist.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";


type TodolistPT = {
    listID: string
    title: string
    tasks: TaskType[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    changeFilter: (listID: string, newFilter: FilterPT) => void
    addTask: (listID: string, title: string) => void
    checkBox: (listID: string, taskID: string) => void
    removeList: (listID: string) => void
    changeTitleTask: (listID: string, taskID: string, title: string) => void
    changeTitleList: (listID: string, title: string) => void
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

        const changeTitleCB = (title: string) => {
            props.changeTitleList(props.listID, title)
        }

        return (
            <div>
                {/*<h3>{props.title}</h3>*/}
                <h3><EditableSpan title={props.title} changeTitle={changeTitleCB}/></h3>
                <button onClick={removeListCB}>x</button>
                <div>
                    <InputArea addItem={props.addTask} listID={props.listID}/>
                </div>
                <Tasks
                    listID={props.listID}
                    filter={props.filter}
                    tasks={props.tasks}
                    removeTaskCB={props.removeTaskCB}
                    checkBox={props.checkBox}
                    changeTitle={props.changeTitleTask}/>
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