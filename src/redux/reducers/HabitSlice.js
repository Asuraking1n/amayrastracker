import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const addToHabits = createAsyncThunk('habits/addTohabits',
    async ( habitData) => {
        const res = await axios.post('/api/habits', { habit: habitData }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data.habits
    }
)

export const dltFromHabit = createAsyncThunk('habits/dltFromHabit',
    async (id) => {
        const res = await axios.delete(`/api/habits/${id}`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data.habits
    }
)

export const upDateHabit = createAsyncThunk('habits/upDateHabit',
    async (obj) => {
        const habit = obj.HabitData
        console.log(obj,habit);
        const res = await axios.post(`/api/habits/${obj.Id}`,{habit},{
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data.habits
    }
)

export const habitSlice = createSlice({
    name: 'habitData',
    initialState: { habits: [], archives: [], status: null },
    reducers: {
        addhabit: (state, action) => {
            return { ...state, habits: [action.payload] }
        },
        addarchive: (state, action) => {
            return { ...state, archives: [action.payload] }
        }
    },
    extraReducers: {
        [addToHabits.pending]: (state) => {
            state.status = 'Loading'
        },
        [addToHabits.fulfilled]: (state, action) => {
            state.habits = action.payload
            state.status = 'Sucess'
        },
        [addToHabits.rejected]: (state) => {
            state.status = 'Some Error Occured'
        },
        [dltFromHabit.pending]: (state) => {
            state.status = 'Loading'
        },
        [dltFromHabit.fulfilled]: (state, action) => {
            state.habits = action.payload
            state.status = 'Sucess'
        },
        [dltFromHabit.rejected]: (state) => {
            state.status = 'Some Error Occured'
        },
        [upDateHabit.pending]: (state) => {
            state.status = 'Loading'
        },
        [upDateHabit.fulfilled]: (state, action) => {
            state.habits = action.payload
            state.status = 'Sucess'
        },
        [upDateHabit.rejected]: (state) => {
            state.status = 'Some Error Occured'
        }
    }
})
export const { addhabit, addarchive } = habitSlice.actions
export default habitSlice.reducer