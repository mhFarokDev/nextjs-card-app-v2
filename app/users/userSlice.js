const { createSlice } = require("@reduxjs/toolkit");

/**
 * Create User slice
 */
const userSlice = createSlice({
    name : user,
    initialState : {
        users : []
    },
    reducers : {},
    extraReducers : {}
})


// selectors
export const userSelector = (state) => state.user
// actions
export const {} = userSlice.actions
// reducer
export default userSlice.reducer