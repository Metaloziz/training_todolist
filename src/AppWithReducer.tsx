import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";
import {InputArea} from "./components/InputArea/InputArea";
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    ListPT,
    removeTodolistAC
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TasksPT} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store/store";


export const ALL = "ALL" as const
export const COMPLETED = "COMPLETED" as const
export const ACTIVE = "ACTIVE" as const

export type FilterPT = typeof ALL | typeof COMPLETED | typeof ACTIVE


function App() {

    // let list_one_ID = v1()
    // let list_two_ID = v1()
    //
    // let [lists, dispatchLists] = useReducer(todolistsReducer, [])
    // let [tasks, dispatchTasks] = useReducer(tasksReducer, {})

    const lists = useSelector<RootReducerType, ListPT[]>(state => state.todolistsReducer)
    const tasks = useSelector<RootReducerType, TasksPT>(state => state.tasksReducer)
    const dispatch = useDispatch()


    const addList = (title: string) => {
        let action = addTodolistAC(title)
        dispatch(action)
       
    }
    const removeList = (listID: string) => {
        let action = removeTodolistAC(listID)
        dispatch(action)

    }
    const changeFilter = (listID: string, newFilter: FilterPT) => {
        dispatch(changeTodolistFilterAC(listID, newFilter))
    }
    const changeTitleList = (listID: string, title: string) => {
        dispatch(changeTodolistTitleAC(listID, title))
    }
    const addTask = (listID: string, title: string) => {
        dispatch(addTaskAC(listID, title))
    }
    const removeTask = (listID: string, taskID: string) => {
        dispatch(removeTaskAC(listID, taskID))
    }
    const checkBox = (listID: string, taskID: string) => {
        dispatch(changeTaskStatusAC(listID, taskID))
    }
    const changeTitleTask = (listID: string, taskID: string, title: string) => {
        dispatch(changeTaskTitleAC(listID, taskID, title))
    }

    return (
        <div className="App">
            <InputArea addItem={addList}/>
            {lists.map(list => {
                return <Todolist key={list.id}
                                 listID={list.id}
                                 title={list.title}
                                 tasks={tasks[list.id]}
                                 filter={list.filter}
                                 addTask={addTask}
                                 removeTaskCB={removeTask}
                                 changeFilter={changeFilter}
                                 checkBox={checkBox}
                                 removeList={removeList}
                                 changeTitleTask={changeTitleTask}
                                 changeTitleList={changeTitleList}/>
            })}

        </div>
    );
}

export default App;
