import {fetchAllUsers} from "./userAPI";

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        users : []
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(fetchAllUsers.fulfilled, (state, action)=>{
            state.users = action.payload
        })
    }
})

// selector
export const userSelector = (state) => state.user;

// action
export const {} = userSlice.actions

// defaulr reducer
export default userSlice.reducer