import {FilterPT} from "../App";
import {v1} from "uuid";

export {}

type ActionsListType = addTodolistACT | removeTodolistACT | changeTodolistTitleACT | changeTodolistFilterACT


export const ADD_LIST = "ADD_LIST"
export const REMOVE_LIST = "REMOVE_LIST"
export const CHANGE_TITLE_LIST = "CHANGE_TITLE_LIST"
export const CHANGE_FILTER_LIST = "CHANGE_FILTER_LIST"

export type addTodolistACT = ReturnType<typeof addTodolistAC>
export type removeTodolistACT = ReturnType<typeof removeTodolistAC>
type changeTodolistTitleACT = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACT = ReturnType<typeof changeTodolistFilterAC>


export const addTodolistAC = (title: string) => ({type: ADD_LIST, listID: v1(), title}) as const
export const removeTodolistAC = (listID: string) => ({type: REMOVE_LIST, listID}) as const // add AC for tasks
export const changeTodolistTitleAC = (listID: string, title: string) =>
    ({type: CHANGE_TITLE_LIST, listID, title}) as const // add AC for tasks
export const changeTodolistFilterAC = (listID: string, filter: FilterPT) =>
    ({type: CHANGE_FILTER_LIST, listID, filter}) as const


export type ListPT = {
    id: string
    title: string
    filter: FilterPT
}


let initState: ListPT[] = [
    {id: '1', title: "TS", filter: 'ALL'},
    {id: '2', title: "JS", filter: 'ALL'},
]


export const todolistsReducer = (state: ListPT[] = initState, action: ActionsListType): ListPT[] => {
    switch (action.type) {
        case ADD_LIST:
            let newList: ListPT = {id: v1(), title: action.title, filter: "ALL"}
            return [newList, ...state]
        case REMOVE_LIST:
            return [...state].filter(el => el.id !== action.listID)
        case CHANGE_TITLE_LIST:
            return state.map(el => el.id === action.listID ? {...el, title: action.title} : el)
        case CHANGE_FILTER_LIST:
            return state.map(el => el.id === action.listID ? {...el, filter: action.filter} : el)
    }
    return state
}