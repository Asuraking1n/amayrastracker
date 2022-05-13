import React, { useState } from "react";
import axios from 'axios'
import { addhabit } from "../../redux/reducers/HabitSlice";
import { useDispatch } from "react-redux";
import "./modal.css";
const EditModal = (props) => {
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

    const upDateHabit=async(habit,token)=>{
        const res = await axios.post(`/api/habits/${props.id}`,{ habit },{
            headers: {
                authorization: token 
            }
        })
        if(res.status===200){
          dispatch(addhabit(res.data.habits))
          props.IsopenModal(false)
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

                    <div className="modal-btn-sec edit-sec">
                        <button onClick={() => props.IsopenModal(false)}>Cancel</button>
                        <button onClick={()=>upDateHabit(habitData,token)}>Update</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;
