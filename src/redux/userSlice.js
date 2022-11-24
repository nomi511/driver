import { createSlice } from "@reduxjs/toolkit";
import {User} from '../assets/data/data'

const initialState = User

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        verified(state, action){
            state.verified = true
        }
    }
})

export const {verified} = userSlice.actions

export default userSlice.reducer