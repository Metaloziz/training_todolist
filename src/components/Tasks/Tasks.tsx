import {ACTIVE, COMPLETED, FilterPT, TaskType} from "../../App";
import React from "react";
import s from './Tasks.module.css'
import {Task} from "./Task/Task";

type TasksPT = {
    listID: string
    tasks: TaskType[]
    filter: FilterPT
    removeTaskCB: (listID: string, taskID: string) => void
    checkBox: (listID: string, taskID: string) => void
    changeTitle: (listID: string, taskID: string, title: string) => void
}


export const Tasks = (props: TasksPT) => {


    let filtredTasks = props.tasks
    if (props.filter === COMPLETED) filtredTasks = props.tasks.filter(el => el.isDone)
    if (props.filter === ACTIVE) filtredTasks = props.tasks.filter(el => !el.isDone)

    return (
        <div>
            <div className={s.ul}>
                {filtredTasks.map(el =>
                    <div key={el.id} className={el.isDone ? s.taskOpacity : ""}>
                        <Task
                            id={el.id}
                            title={el.title}
                            isDone={el.isDone}
                            listID={props.listID}
                            removeTaskCB={props.removeTaskCB}
                            checkBox={props.checkBox}
                            changeTitle={props.changeTitle}/>
                    </div>)
                }
            </div>
        </div>
    );
};