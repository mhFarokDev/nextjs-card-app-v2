import {createUserPush, deleteUserFind, fetchAllUsers, updateRealUser} from "./userAPI";

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
        }),
        builder.addCase(createUserPush.fulfilled, (state, action)=>{
            state.users.push(action.payload)
        })
        builder.addCase(deleteUserFind.fulfilled, (state, action)=>{
            state.users = state.users.filter(data => data._id != action.payload)
        })
        builder.addCase(updateRealUser.fulfilled, (state, action)=>{
            const findIndex = state.users.findIndex(data => action.payload.id == data._id)
            state.users[findIndex] = action.payload 
        })
    }
})

// selector
export const userSelector = (state) => state.user;

// action
export const {} = userSlice.actions

// defaulr reducer
export default userSlice.reducer