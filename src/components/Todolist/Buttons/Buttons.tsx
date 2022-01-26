import React, {MouseEvent} from "react";
import s from './Buttons.module.css'
import {ACTIVE, ALL, COMPLETED, FilterPT} from "../../../AppWithReducer";
import {changeTodolistFilterAC} from "../../../state/todolists-reducer";
import {useDispatch} from "react-redux";

type ButtonsPT = {
    listID: string
    filter: FilterPT
}
export const Buttons = (props: ButtonsPT) => {

    const dispatch = useDispatch()

    const changeFilterCB = (event: MouseEvent<HTMLButtonElement>) => {

        let filter: FilterPT = ALL
        if (event.currentTarget.id === ACTIVE) filter = ACTIVE
        if (event.currentTarget.id === COMPLETED) filter = COMPLETED

        dispatch(changeTodolistFilterAC(props.listID, filter))
    }


    return (
        <div className={s.buttons}>
            <button id={ALL} className={props.filter === ALL ? s.button : ""}
                    onClick={changeFilterCB}>All
            </button>
            <button id={ACTIVE}
                    className={props.filter === ACTIVE ? s.button : ""}
                    onClick={changeFilterCB}>ACTIVE
            </button>
            <button id={COMPLETED}
                    className={props.filter === COMPLETED ? s.button : ""}
                    onClick={changeFilterCB}>COMPLETED
            </button>
        </div>
    );
};