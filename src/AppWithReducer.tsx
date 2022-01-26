import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {InputArea} from "./components/InputArea/InputArea";
import {addTodolistAC, ListPT} from "./state/todolists-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store/store";


export const ALL = "ALL" as const
export const COMPLETED = "COMPLETED" as const
export const ACTIVE = "ACTIVE" as const

export type FilterPT = typeof ALL | typeof COMPLETED | typeof ACTIVE


function App() {

    const lists = useSelector<RootReducerType, ListPT[]>(state => state.todolistsReducer)
    const dispatch = useDispatch()

    const addList = (title: string) => dispatch(addTodolistAC(title))

    return (
        <div className="App">
            <InputArea addItem={addList}/>
            {lists.map(list => {
                return <Todolist key={list.id} list={list}/>
            })}
        </div>
    );
}

export default App;
