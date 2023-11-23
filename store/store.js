import userSlice from "@/app/users/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer : {
        user : userSlice
    },
    devTools : true
})


export default store