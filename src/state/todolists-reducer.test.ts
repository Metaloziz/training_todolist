import {
    addTodolistAC, changeTodolistTitleAC, ListPT,
    changeTodolistFilterAC,
    removeTodolistAC,
    todolistsReducer,
} from './todolists-reducer';

import {FilterPT} from "../App";

let todolistId1: string;
let todolistId2: string;
let startState: ListPT[] = [];

beforeEach(() => {
    todolistId1 = 'todolistId1';
    todolistId2 = 'todolistId2';
    startState = [
        {id: todolistId1, title: "What to learn", filter: "ALL"},
        {id: todolistId2, title: "What to buy", filter: "ALL"}
    ]
})

test('correct todolist should be added', () => {
    let newTodolistTitle = "New Todolist";

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(startState).not.toBe(endState)
    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[0].filter).toBe("ALL")
});
test('correct todolist should be removed', () => {
    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(startState).not.toBe(endState)
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});
test('correct todolist should change its name', () => {
    let newTodolistTitle = "New Todolist";

    const action = changeTodolistTitleAC(todolistId2, newTodolistTitle);

    const endState = todolistsReducer(startState, action);

    expect(startState).not.toBe(endState)
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});
test('correct filter of todolist should be changed', () => {

    let newFilter: FilterPT = "COMPLETED";

    const action = changeTodolistFilterAC(todolistId2, newFilter);

    const endState = todolistsReducer(startState, action);


    expect(startState).not.toBe(endState)
    expect(endState[0].filter).toBe("ALL");
    expect(endState[1].filter).toBe(newFilter);
});

