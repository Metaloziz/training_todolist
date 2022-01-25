import {ACTIVE, ALL, COMPLETED, FilterPT} from "../../../App";
import React, {MouseEvent} from "react";
import s from './Buttons.module.css'

type ButtonsPT = {
    listID: string
    filter: FilterPT
    changeFilter: (listID: string, newFilter: FilterPT) => void
}
export const Buttons = (props: ButtonsPT) => {

    const changeFilterCB = (event: MouseEvent<HTMLButtonElement>) => {

        let filter: FilterPT = ALL
        if (event.currentTarget.id === ACTIVE) filter = ACTIVE
        if (event.currentTarget.id === COMPLETED) filter = COMPLETED

        props.changeFilter(props.listID, filter)
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