const { getUserData } = require("@/libs/getUserData");
const { createAsyncThunk } = require("@reduxjs/toolkit");

// fetch all users
export const fetchAllUsers = createAsyncThunk("user/fetchuser", async () => {
    const users = await getUserData()
    return users
})

/**
 * realtime data push
 */
export const createUserPush = createAsyncThunk("user/added", async (data)=>{
    const users = data
    console.log(users);
    return users
})


/**
 * delete realtime action
 */

export const deleteUserFind = createAsyncThunk("uder/deleted", async(id)=>{
    return id;
})


/**
 * update realtime users data
 */

export const updateRealUser = createAsyncThunk("user/update", async(data)=>{
    console.log(data);
    return data;
})
