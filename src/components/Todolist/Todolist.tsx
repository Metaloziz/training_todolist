import React from "react";
import {Tasks} from "../Tasks/Tasks";
import {InputArea} from "../InputArea/InputArea";
import s from './Todolist.module.css'
import {EditableSpan} from "../EditableSpan/EditableSpan";
import {Buttons} from "./Buttons/Buttons";
import {addTaskAC} from "../../state/tasks-reducer";
import {FilterPT} from "../../AppWithReducer";
import {useDispatch} from "react-redux";
import {changeTodolistTitleAC, ListPT, removeTodolistAC} from "../../state/todolists-reducer";


type TodolistPT = {
    list: ListPT
}

export const Todolist = (props: TodolistPT) => {

    const dispatch = useDispatch()

    const removeListCB = () => dispatch(removeTodolistAC(props.list.id))
    const changeTitleCB = (title: string) => dispatch(changeTodolistTitleAC(props.list.id, title))
    const addTaskCB = (title: string) => dispatch(addTaskAC(props.list.id, title))


    return (
        <div className={s.listItems}>

            <div className={s.headList}>
                <h3>
                    <EditableSpan title={props.list.title} changeTitle={changeTitleCB}/>
                </h3>
                <button onClick={removeListCB}>x</button>
            </div>
            <div>
                <InputArea addItem={addTaskCB}/>
            </div>
            <Tasks
                listID={props.list.id}
                filter={props.list.filter}
                // tasks={props.tasks}
                // removeTaskCB={props.removeTaskCB}
                // checkBox={props.checkBox}
                // changeTitle={props.changeTitleTask}
            />
            <Buttons listID={props.list.id}
                     filter={props.list.filter}
                // changeFilter={props.changeFilter}
            />
        </div>
    );
};