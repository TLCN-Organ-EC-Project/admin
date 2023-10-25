import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface ITypesLogin{
    isLoggedIn:boolean,
    current:any,
    token:any,
}

const  initialState:ITypesLogin= {
    isLoggedIn: false,
    current: null,
    token: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
            state.token = action.payload.token
            state.current=action.payload.current
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.token = null
            state.current = null
           
        },
    },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer