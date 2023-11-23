const { getUserData } = require("@/libs/getUserData");
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchAllUsers = createAsyncThunk("user/fetchuser", async () => {
    const users = await getUserData()
    return users
})

