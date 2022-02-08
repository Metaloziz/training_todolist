import {v1} from "uuid";
import {ADD_LIST, addTodolistACT, REMOVE_LIST, removeTodolistACT} from "./todolists-reducer";

export {}

type ActionsTasksType =
    addTaskACT
    | removeTaskACT
    | changeTaskTitleACT
    | changeTaskStatusACT
    | addTodolistACT
    | removeTodolistACT


export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const CHANGE_TITLE_TASK = "CHANGE_TITLE_TASK"
export const CHANGE_STATUS_TASK = "CHANGE_STATUS_TASK"

type addTaskACT = ReturnType<typeof addTaskAC>
type removeTaskACT = ReturnType<typeof removeTaskAC>
type changeTaskTitleACT = ReturnType<typeof changeTaskTitleAC>
type changeTaskStatusACT = ReturnType<typeof changeTaskStatusAC>

export const addTaskAC = (listID: string, title: string) => ({type: ADD_TASK, listID, title}) as const
export const removeTaskAC = (listID: string, taskID: string) => ({type: REMOVE_TASK, listID, taskID}) as const
// add AC for tasks
export const changeTaskTitleAC = (listID: string, taskID: string, title: string) =>
    ({type: CHANGE_TITLE_TASK, listID, taskID, title}) as const // add AC for tasks
export const changeTaskStatusAC = (listID: string, taskID: string) =>
    ({type: CHANGE_STATUS_TASK, listID, taskID}) as const


export type TasksPT = {
    [key: string]: TaskType[]
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

let initState: TasksPT = {
    "1": [
        {id: v1(), title: '<script>()=>console.log(1)</script>', isDone: false},
        {id: v1(), title: 'evening', isDone: true},
        {id: v1(), title: 'hire', isDone: true},
        {id: v1(), title: 'apart', isDone: true},
    ],
    "2": [
        {id: v1(), title: 'universe', isDone: true},
        {id: v1(), title: 'fruit', isDone: false},
        {id: v1(), title: 'week', isDone: true},
        {id: v1(), title: 'bend', isDone: false},
    ]
}

export const tasksReducer = (state: TasksPT = initState, action: ActionsTasksType): TasksPT => {
    switch (action.type) {
        case ADD_TASK:
            let newTask: TaskType = {id: v1(), title: action.title, isDone: false}
            return {...state, [action.listID]: [newTask, ...state[action.listID]]}
        case REMOVE_TASK:
            return {
                ...state, [action.listID]: state[action.listID]
                    .filter(el => el.id !== action.taskID)
            }
        case CHANGE_STATUS_TASK:
            return {
                ...state, [action.listID]: state[action.listID]
                    .map(el => el.id === action.taskID ? {...el, isDone: !el.isDone} : el)
            }
        case CHANGE_TITLE_TASK:
            return {
                ...state, [action.listID]: state[action.listID]
                    .map(el => el.id === action.taskID ? {...el, title: action.title} : el)
            }
        case ADD_LIST:
            let copy = {...state}
            copy[action.listID] = []
            return copy
        case REMOVE_LIST:
            let copy1 = {...state}
            delete copy1[action.listID]
            return copy1
    }
    return state
}