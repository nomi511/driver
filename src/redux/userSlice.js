import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLocalStorage, getLocalStorage } from "../helpers/localStorage";
import {API_URL} from '@env'
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    user: null,
    token: "",
    isLoading: false,
    error: false,
    msg: ''
}



// register user
export const registerUser = createAsyncThunk('user/registration', async(newUser)=>{
    
    let resData = ''
    await axios.post(`${API_URL}/users/register`, newUser).then(res=>{
        resData = res.data
    }).catch(err=>{
        console.log('\n\t redux Error: ' ,err)
        resData = {success: false, message: 'Error while Signing Up!'}
    })

    return resData
})





// verify user email
export const verifyUserEmail = createAsyncThunk('user/verify-email', async(newUser)=>{
    
    const data = await getLocalStorage('userinfo')
    
    let resData = ''
    await axios.post(`${API_URL}/users/verify-email`, newUser).then(res=>{
        if(data){
            resData = {
                success: res.data.success,
                message: res.data.message,
                token: data.token
            }
        }
        
    }).catch(err=>{
        console.log('\n\t redux Error: ' ,err)
        resData = {success: false, message: 'Error while Signing Up!'}
    })

    return resData
})




// login User
export const loginUser = createAsyncThunk('user/login', async(newUser)=>{

    let resData = ''
    await axios.post(`${API_URL}/users/login`, newUser).then(res=>{
        resData = res.data
    }).catch(err=>{
        console.log('\n\t redux Error: ' ,err)
        resData = {success: false, message: 'Error while Signing Up!'}

    })
    return resData
})



// check Token

export const tokenCheck = createAsyncThunk('user/token', async()=>{
    return await getLocalStorage('userinfo')
})

// fetch User details
export const fetchUserDetails = createAsyncThunk('user/fetchUser', async(newUser)=>{

    // get token and user ID from localstorage.
    const TOKEN = ''
    const id = ''
    
    const config = {
        headers:{
            Authorization: `Bearer ${TOKEN}`,
        },
    }


    let resData = ''
    await axios.get(`${API_URL}/users/${id}`, config).then(res=>{
        resData = res.data
    }).catch(err=>{
        console.log('\n\t redux Error: ' ,err)
        resData = {success: false, message: 'Error Retrieving User Info!'}

    })
    return resData
})





// clear local storage
const clearStorage = async()=>{
    try {
        await AsyncStorage.clear()
    } catch (error) {
        console.log(error)
    }
}



const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        reset(state, action){
            state.error = false,
            state.isLoading = false,
            state.msg = ''
        },
        tokenReset(state, action){
            clearStorage()
            state.token = ""
        }
    },
    extraReducers:{

        // registration ----------------------------------------------

        [registerUser.pending]:(state,action)=>{
            state.isLoading= true
        },
        [registerUser.fulfilled]:(state,action)=>{
            state.isLoading= false;
            if(!action.payload.success){
                state.error = true;
                state.msg = action.payload.message;
            }else{
                state.msg = action.payload.message
                setLocalStorage('userinfo', {id:action.payload.id, token: action.payload.token})
            }
        },
        [registerUser.rejected]:(state,action)=>{
            state.error = true,
            state.isLoading = false
            state.msg = action.error.message
        },


        // email verification -----------------------------------------

        [verifyUserEmail.pending]:(state,action)=>{
            state.isLoading= true
        },
        [verifyUserEmail.fulfilled]:(state,action)=>{
            state.isLoading= false;
            if(!action.payload.success){
                state.error = true;
                state.msg = action.payload.message;
            }else{
                if(action.payload.token){
                    state.token = action.payload.token
                }
                state.msg = action.payload.message
            }
        },
        [verifyUserEmail.rejected]:(state,action)=>{
            state.error = true,
            state.isLoading = false
            state.msg = action.error.message
        },



        // login --------------------------------------------------------

        [loginUser.pending]:(state,action)=>{
            state.isLoading= true
        },
        [loginUser.fulfilled]:(state,action)=>{
            state.isLoading= false;
            if(!action.payload.success){
                state.error = true;
                state.msg = 'Logged In Successfully!';
                // save token in localstorage

            }else{
                state.msg = action.payload.message
            }
        },
        [loginUser.rejected]:(state,action)=>{
            state.error = true,
            state.isLoading = false
            state.msg = action.error.message
        },




        // token check  ------------------------------------------

        [tokenCheck.pending]:(state,action)=>{
        },
        [tokenCheck.fulfilled]:(state,action)=>{
            if(action.payload.token){
                state.token = action.payload.token
            }
        },
        [tokenCheck.rejected]:(state,action)=>{  
        },



        // fetch user details  ------------------------------------------

        [fetchUserDetails.pending]:(state,action)=>{
            state.isLoading= true
        },
        [fetchUserDetails.fulfilled]:(state,action)=>{
            state.isLoading= false;
            if(!action.payload.success){
                state.error = true;
                // filter user details and the save it in state.user
                const {name, email, image, mobile, address, city, totalIncome} = action.payload
                state.user = action.payload.message;
            }else{
                state.msg = action.payload.message
            }
        },
        [fetchUserDetails.rejected]:(state,action)=>{
            state.error = true,
            state.isLoading = false
            state.msg = action.error.message
        },


    }
})
 
export const {reset, tokenReset} = userSlice.actions

export default userSlice.reducer