import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './InputArea.module.css'

type InputAreaPT = {
    // listID: string
    addItem: (title: string) => void
}


export const InputArea = (props: InputAreaPT) => {

    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<boolean>(false)

    const changeTaskTitleCB = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(false)
    }
    const addTaskCB = () => {
        if (title) {
            props.addItem(title.trim())
            setTitle('')
            setError(false)
        } else {
            setError(true)
        }

    }
    const addTaskForEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (title) {
                props.addItem(title.trim())
                setTitle('')
                setError(false)
            } else {
                setError(true)
            }
        }
    }

    return (
        <div>
            <div className={s.inputAndButton}>
                <input value={title}
                       className={error ? s.input : ''}
                       onChange={changeTaskTitleCB}
                       onKeyPress={addTaskForEnter}/>
                {/*<script>{() => console.log('bug')}</script>*/}
                <button onClick={addTaskCB}>+</button>
            </div>
            <div className={error ? s.textErrorTrue : s.textErrorFalse}>Field is required</div>
        </div>
    );
};