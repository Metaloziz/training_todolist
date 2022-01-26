import React from "react";
import {Tasks} from "../Tasks/Tasks";
import {InputArea} from "../InputArea/InputArea";
import s from './Todolist.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Buttons} from "./Buttons/Buttons";
import {TaskType} from "../../state/tasks-reducer";
import {FilterPT} from "../../AppWithReducer";


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


    const removeListCB = () => {
        props.removeList(props.listID)
    }

    const changeTitleCB = (title: string) => {
        props.changeTitleList(props.listID, title)
    }

    const addTaskCB = (title:string) => {
        props.addTask(props.listID, title)
    }

    return (
        <div className={s.listItems}>

            <div className={s.headList}>
                <h3>
                    <EditableSpan title={props.title} changeTitle={changeTitleCB}/>
                </h3>
                <button onClick={removeListCB}>x</button>
            </div>
            <div>
                <InputArea addItem={addTaskCB}/>
            </div>
            <Tasks
                listID={props.listID}
                filter={props.filter}
                tasks={props.tasks}
                removeTaskCB={props.removeTaskCB}
                checkBox={props.checkBox}
                changeTitle={props.changeTitleTask}
            />
            <Buttons listID={props.listID}
                     filter={props.filter}
                     changeFilter={props.changeFilter}
            />
        </div>
    );
};