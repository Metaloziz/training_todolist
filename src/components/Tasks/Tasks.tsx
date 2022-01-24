import {FilterPT, TaskPT} from "../../App";
import React from "react";

type TasksPT = {
    listID: string
    tasks: TaskPT[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
}
export const Tasks = (props: TasksPT) => {

    const removeTaskCB = (taskID: string) => {
        props.removeTaskCB(props.listID, taskID)
    }

    let filtredTasks

    switch (props.filter) {
        case "COMPLETED":
            filtredTasks = props.tasks.filter(el => el.isDone)
            break
        case "ACTIVE":
            filtredTasks = props.tasks.filter(el => !el.isDone)
            break
        case "ALL":
        default:
            filtredTasks = props.tasks

    }


    return (
        <div>
            <ul>
                {filtredTasks.map(el => <li key={el.id} id={el.id}>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                    <button onClick={() => removeTaskCB(el.id)}>x</button>
                </li>)}
            </ul>
        </div>
    );
};