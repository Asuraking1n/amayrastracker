import React, { useState } from "react";
import axios from 'axios'
import "./modal.css";
import { useDispatch } from "react-redux";
import { addhabit } from "../../redux/reducers/HabitSlice";
const Moadal = (props) => {
    const dispatch = useDispatch()
    const [habitData, setHabitData] = useState({
        name: '',
        date: '',
        reminder: '',
    })
    const token  = localStorage.getItem('token')
    const HandelFormData = (e) => {
        let name = e.target.name
        let val = e.target.value
        setHabitData({ ...habitData, [name]: val })
    }
    const addHabit=async(habitData,token)=>{
        const res = await axios.post('/api/habits',{habit: habitData},{
            headers: {
                authorization: token 
            }
        })
        if(res.status===200){
        dispatch(addhabit(res.data.habits))
        props.openModal(false)
        }else{
            alert('error')
        }
    }
    return (
        <>
            <div className="habit-modal-cont">
                <div className="habit-modal-sec">
                    <div className="modal-heading">New Habit</div>
                    <div className="habit-name">
                        <span>Name</span>
                        <input type="text" placeholder="Achiver" name="name" onChange={HandelFormData} />
                    </div>
                    <div className="habit-name">
                        <span>Goal Start</span>
                        <input type="date" placeholder="14-04-2022" name="date" onChange={HandelFormData} />
                    </div>
                    <div className="habit-name">
                        <span>Reminder</span>
                        <input type="text" placeholder="You can do it" name="reminder" onChange={HandelFormData} />
                    </div>

                    <div className="modal-btn-sec">
                        <button onClick={() => props.openModal(false)}>Cancel</button>
                        <button onClick={()=>addHabit(habitData,token)}>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Moadal;
