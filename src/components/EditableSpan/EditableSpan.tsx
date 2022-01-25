import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type EditableSpanPT = {
    title: string
    changeTitle: (title: string) => void
}
export const EditableSpan = (props: EditableSpanPT) => {

    const [view, setView] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.title)

    const changeViewCB = () => {
        if (value.trim()) {
            setView(!view)
            props.changeTitle(value)
        }
    }

    const changeValueCB = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const changeValueFromEnterCB = (event: KeyboardEvent<HTMLInputElement>) => {
        if (value.trim()) {
            if (event.key === "Enter") {
                setValue(event.currentTarget.value)
                setView(!view)
            }
        }


    }

    return (
        <div onDoubleClick={changeViewCB}>
            {
                view
                    ? <input autoFocus
                             value={value}
                             onChange={changeValueCB}
                             onBlur={changeViewCB}
                             onKeyPress={changeValueFromEnterCB}/>
                    : <span>{value}</span>
            }
        </div>

    );
};