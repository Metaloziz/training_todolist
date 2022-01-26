import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "../state/todolists-reducer";
import {tasksReducer} from "../state/tasks-reducer";


const rootReducer = combineReducers({
    todolistsReducer,
    tasksReducer
})

export const store = createStore(rootReducer)

export type RootReducerType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store