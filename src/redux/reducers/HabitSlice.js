import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const addToHabits = createAsyncThunk('habits/addTohabits',
    async (habitData) => {
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
        const res = await axios.post(`/api/habits/${obj.Id}`, { habit }, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data.habits
    }
)

export const addToArchive = createAsyncThunk('habits/addToArchive',
    async (id) => {
        const res = await axios.post(`/api/archives/${id}`, {}, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data
    }
)

export const dltFromArchive = createAsyncThunk('habits/dltFromArchive',
    async (id) => {
        const res = await axios.delete(`/api/archives/${id}`,{
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data.archives
    }
)


export const reStoreFromArchive = createAsyncThunk('habits/reStoreFromArchive',
    async (id) => {
        const res = await axios.post(`/api/archives/restore/${id}`,{},{
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        return res.data
    }
)




export const habitSlice = createSlice({
    name: 'habitData',
    initialState: { habits: [], archives: [], status: null },
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
        },
        [addToArchive.pending]: (state) => {
            state.status = 'Loading'
        },
        [addToArchive.fulfilled]: (state, action) => {
            state.habits = action.payload.habits
            state.archives = action.payload.archives
            state.status = 'Sucess'
        },
        [addToArchive.rejected]: (state) => {
            state.status = 'Some Error Occured'
        },
        [dltFromArchive.pending]: (state) => {
            state.status = 'Loading'
        },
        [dltFromArchive.fulfilled]: (state, action) => {
            state.archives = action.payload
            state.status = 'Sucess'
        },
        [dltFromArchive.rejected]: (state) => {
            state.status = 'Some Error Occured'
        },
        [reStoreFromArchive.pending]: (state) => {
            state.status = 'Loading'
        },
        [reStoreFromArchive.fulfilled]: (state, action) => {
            state.habits = action.payload.habits
            state.archives = action.payload.archives
            state.status = 'Sucess'
        },
        [reStoreFromArchive.rejected]: (state) => {
            state.status = 'Some Error Occured'
        }
    }
})
export const { addhabit, addarchive } = habitSlice.actions
export default habitSlice.reducer