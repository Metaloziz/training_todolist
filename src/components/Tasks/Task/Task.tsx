import React, {ChangeEvent} from "react";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import s from './Task.module.css'
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../../state/tasks-reducer";

type TaskPT = {
    taskID: string
    listID: string
    isDone: boolean
    title: string
}
export const Task = (props: TaskPT) => {

    const dispatch = useDispatch()

    const removeTaskCB = (taskID: string) => {
        dispatch(removeTaskAC(props.listID, taskID))
    }

    const checkBoxCB = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(props.listID, event.currentTarget.id))
    }

    const changeTitleCB = (title: string) => {
        dispatch(changeTaskTitleAC(props.listID, props.taskID, title))
    }

    return (
        <div className={s.task}>
            <input id={props.taskID} type="checkbox" checked={props.isDone} onChange={checkBoxCB}/>
            <EditableSpan title={props.title} changeTitle={changeTitleCB}/>
            <button onClick={() => removeTaskCB(props.taskID)}>x</button>
        </div>
    );
};