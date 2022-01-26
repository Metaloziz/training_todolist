export {}

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from "./components/Todolist/Todolist";
// import {v1} from 'uuid'
// import {InputArea} from "./components/InputArea/InputArea";
// import {ListPT} from "./state/todolists-reducer";
// import {TasksPT, TaskType} from "./state/tasks-reducer";
//
//
// export const ALL = "ALL" as const
// export const COMPLETED = "COMPLETED" as const
// export const ACTIVE = "ACTIVE" as const
//
// export type FilterPT = typeof ALL | typeof COMPLETED | typeof ACTIVE
//
//
// function App() {
//
//     let list_one_ID = v1()
//     let list_two_ID = v1()
//
//     let [lists, setLists] = useState<ListPT[]>([
//         {id: list_one_ID, title: "TS", filter: 'ALL'},
//         {id: list_two_ID, title: "JS", filter: 'ALL'},
//     ])
//
//     let [tasks, setTasks] = useState<TasksPT>({
//         [list_one_ID]: [
//             {id: v1(), title: 'person1', isDone: false},
//             {id: v1(), title: 'evening', isDone: true},
//             {id: v1(), title: 'hire', isDone: true},
//             {id: v1(), title: 'apart', isDone: true},
//         ],
//         [list_two_ID]: [
//             {id: v1(), title: 'universe', isDone: true},
//             {id: v1(), title: 'fruit', isDone: false},
//             {id: v1(), title: 'week', isDone: true},
//             {id: v1(), title: 'bend', isDone: false},
//         ]
//     })
//
//     const addTask = (listID: string, title: string) => {
//         let newTask: TaskType = {id: v1(), title: title, isDone: false}
//         setTasks(state => ({...state, [listID]: [newTask, ...state[listID]]}))
//     }
//     const removeTask = (listID: string, taskID: string) => {
//         setTasks((state) => ({...state, [listID]: state[listID].filter(l => l.id !== taskID)}))
//     }
//     const checkBox = (listID: string, taskID: string) => {
//         setTasks((state) => (
//             {
//                 ...state, [listID]: state[listID]
//                     .map(l => l.id === taskID ? {...l, isDone: !l.isDone} : l)
//             }
//         ))
//     }
//     const changeTitleTask = (listID: string, taskID: string, title: string) => {
//         setTasks({...tasks, [listID]: tasks[listID].map(el => el.id === taskID ? {...el, title: title} : el)})
//     }
//     const changeFilter = (listID: string, newFilter: FilterPT) => {
//         setLists(state => state.map(el => el.id === listID ? {...el, filter: newFilter} : el))
//     }
//     const removeList = (listID: string) => {
//         setLists(state => state.filter(el => el.id !== listID))
//         let copy = {...tasks}
//         delete copy[listID]
//         setTasks(copy)
//         console.log(tasks)
//     }
//     const addList = ( title: string) => {
//         let newList: ListPT = {id: listID, title: title, filter: ALL}
//         let copyList = [...lists]
//         copyList.unshift(newList)
//         setLists(copyList)
//         let copyTasks = {...tasks}
//         copyTasks[listID] = []
//         setTasks(copyTasks)
//     }
//     const changeTitleList = (listID: string, title: string) => {
//         setLists(lists.map(el => el.id === listID ? {...el, title: title} : el))
//     }
//
//
//     return (
//         <div className="App">
//             <InputArea addItem={addList}/>
//             {lists.map(list => {
//                 return <Todolist key={list.id}
//                                  listID={list.id}
//                                  title={list.title}
//                                  tasks={tasks[list.id]}
//                                  filter={list.filter}
//                                  addTask={addTask}
//                                  removeTaskCB={removeTask}
//                                  changeFilter={changeFilter}
//                                  checkBox={checkBox}
//                                  removeList={removeList}
//                                  changeTitleTask={changeTitleTask}
//                                  changeTitleList={changeTitleList}/>
//             })}
//
//         </div>
//     );
// }
//
// export default App;
