import React, {ChangeEvent} from "react";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import s from './Task.module.css'

type TaskPT = {
    id: string
    isDone: boolean
    title: string
    listID: string
    removeTaskCB: (listID: string, taskID: string) => void
    checkBox: (listID: string, taskID: string) => void
    changeTitle: (listID: string, taskID: string, title: string) => void
}
export const Task = (props: TaskPT) => {

    const removeTaskCB = (taskID: string) => {
        props.removeTaskCB(props.listID, taskID)
    }
    const checkBoxCB = (event: ChangeEvent<HTMLInputElement>) => {
        props.checkBox(props.listID, event.currentTarget.id)
    }

    const changeTitleCB = (title: string) => {
        props.changeTitle(props.listID, props.id, title)
    }

    return (
        <div className={s.task}>
            <input id={props.id} type="checkbox" checked={props.isDone} onChange={checkBoxCB}/>
            <EditableSpan title={props.title} changeTitle={changeTitleCB}/>
            <button onClick={() => removeTaskCB(props.id)}>x</button>
        </div>
    );
};