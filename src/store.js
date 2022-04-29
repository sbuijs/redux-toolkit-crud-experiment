import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./features/users/store";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})