import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './InputArea.module.css'

type InputAreaPT = {
    listID: string
    addTask: (listID: string, title: string) => void
}
export const InputArea = (props: InputAreaPT) => {

    let [title, setTitle] = useState<string>('')
    let [error, seterror] = useState<boolean>(false)

    const changeTaskTitleCB = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        seterror(false)
    }
    const addTaskCB = () => {
        if (title) {
            props.addTask(props.listID, title.trim())
            setTitle('')
            seterror(false)
        } else {
            seterror(true)
        }

    }
    const addTaskForEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (title) {
                props.addTask(props.listID, title.trim())
                setTitle('')
                seterror(false)
            } else {
                seterror(true)
            }
        }
    }

    return (
        <div>
            <input value={title}
                   className={error ? s.input : ''}
                   onChange={changeTaskTitleCB}
                   onKeyPress={addTaskForEnter}/>
            <button onClick={addTaskCB}>+</button>
            <div className={error ? s.textErrorTrue : s.textErrorFalse}>Field is required</div>
        </div>
    );
};