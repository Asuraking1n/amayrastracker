import { createSlice } from "@reduxjs/toolkit";



export const habitSlice = createSlice({
    name:'habitData',
    initialState:{habits:[],archives:[]},
    reducers:{
        addhabit:(state,action)=>{
            return {...state,habits:[action.payload]}
        },
        addarchive:(state,action)=>{
            return {...state,archives:[action.payload]}
        }
    }
})
export const {addhabit,addarchive} = habitSlice.actions
export default habitSlice.reducer