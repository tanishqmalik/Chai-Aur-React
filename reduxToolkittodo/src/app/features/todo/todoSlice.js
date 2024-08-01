import { createSlice,nanoid } from "@reduxjs/toolkit";

const inintialState = {
    todos: [{id:1,text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:
    }

})