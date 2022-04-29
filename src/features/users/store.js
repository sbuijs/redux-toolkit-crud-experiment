//reducer
import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from '../../data/fakeData.js'

// let initialValue = UsersData;

//allows us to create all of the reducers and actions
//for the variable/state and merge everything together
export const userSlice = createSlice({
    //this is the users' reducer
    name: "users",
    initialState: { value: UsersData },
    //reducers actions 
    reducers: {
        //state is current value of the state
        addUser: (state, action) => {
            //adding a new user to the state array with the payload
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            //create a new array with the users that dont contain the same id
            //as the id we recieve from the payload
            state.value = state.value.filter((user) =>
                user.id !== action.payload.id)
        },
        updateUserName: (state, action) => {
            //pass in the id we want to update and the new username
            //we map though the users
            state.value.map((user) => {
                //if the user is equal to the id of the action payload
                if (user.id === action.payload.id) {
                    return user.username = action.payload.username
                }
                return null;
            })
        }
    }
})

//exporting all of the actions that can be done with this slice
export const { addUser, deleteUser, updateUserName } = userSlice.actions;
// exporting the reducer from the userslice so that we can import it in index.js
export default userSlice.reducer;