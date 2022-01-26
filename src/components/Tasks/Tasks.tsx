import React from "react";
import s from './Tasks.module.css'
import {Task} from "./Task/Task";
import {TaskType} from "../../state/tasks-reducer";
import {ACTIVE, COMPLETED, FilterPT} from "../../AppWithReducer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";

type TasksPT = {
    listID: string
    // tasks: TaskType[]
    filter: FilterPT
}

export const Tasks = (props: TasksPT) => {

    let tasks = useSelector<RootReducerType, TaskType[]>(state => state.tasksReducer[props.listID])

    if (props.filter === COMPLETED) tasks = tasks.filter(el => el.isDone)
    if (props.filter === ACTIVE) tasks = tasks.filter(el => !el.isDone)

    return (
        <div>
            <div className={s.ul}>
                {tasks.map(el =>
                    <div key={el.id} className={el.isDone ? s.taskOpacity : ""}>
                        <Task
                            taskID={el.id}
                            title={el.title}
                            isDone={el.isDone}
                            listID={props.listID}
                        />
                    </div>)
                }
            </div>
        </div>
    );
};