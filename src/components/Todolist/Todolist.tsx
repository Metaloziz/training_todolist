import React from "react";
import {taskPT} from "../../App";


type TodolistPT = {
    title: string
    tasks: taskPT[]
}


export const Todolist = (props: TodolistPT) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => <li key={el.id} id={el.id}>
                    <input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                </li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};