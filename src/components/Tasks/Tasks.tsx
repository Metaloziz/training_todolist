import {ACTIVE, COMPLETED, FilterPT, TaskPT} from "../../App";
import React, {ChangeEvent} from "react";
import s from './Tasks.module.css'

type TasksPT = {
    listID: string
    tasks: TaskPT[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    checkBox: (listID: string, taskID: string) => void
}
export const Tasks = (props: TasksPT) => {

    const removeTaskCB = (taskID: string) => {
        props.removeTaskCB(props.listID, taskID)
    }
    const checkBoxCB = (taskID: ChangeEvent<HTMLInputElement>) => {
        props.checkBox(props.listID, taskID.currentTarget.id)
    }


    let filtredTasks = props.tasks

    if (props.filter === COMPLETED) filtredTasks = props.tasks.filter(el => el.isDone)
    if (props.filter === ACTIVE) filtredTasks = props.tasks.filter(el => !el.isDone)


    return (
        <div>
            <ul>
                {filtredTasks.map(el => <li key={el.id} className={el.isDone ? s.taskOpacity : ""}>
                    <input id={el.id} type="checkbox" checked={el.isDone} onChange={checkBoxCB}/>
                    <span>{el.title}</span>
                    <button onClick={() => removeTaskCB(el.id)}>x</button>
                </li>)}
            </ul>
        </div>
    );
};