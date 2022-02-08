import React, {ChangeEvent, useCallback} from "react";
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

    const removeTaskCB = useCallback(() => {
        dispatch(removeTaskAC(props.listID, props.taskID))
    }, [dispatch, props.listID, props.taskID])

    const checkBoxCB = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTaskStatusAC(props.listID, event.currentTarget.id))
    }, [dispatch, props.listID])

    const changeTitleCB = useCallback((title: string) => {
        dispatch(changeTaskTitleAC(props.listID, props.taskID, title))
    }, [dispatch, props.listID, props.taskID])

    return (
        <div className={s.task}>
            <input id={props.taskID} type="checkbox" checked={props.isDone} onChange={checkBoxCB}/>
            <EditableSpan title={props.title} changeTitle={changeTitleCB}/>
            <button onClick={removeTaskCB}>x</button>
        </div>
    );
};