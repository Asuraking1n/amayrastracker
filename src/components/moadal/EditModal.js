import React, { useState } from "react";
import { upDateHabit } from "../../redux/reducers/HabitSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";
const EditModal = (props) => {
  const dispatch = useDispatch();
  const [habitData, setHabitData] = useState({
    name: "",
    date: "",
    reminder: "",
  });

  const HandelFormData = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setHabitData({ ...habitData, [name]: val });
  };

  const upDatHabit = (id, habit) => {
    dispatch(upDateHabit({ Id: id, HabitData: habit }));
    props.IsopenModal(false);
  };
  return (
    <>
      <ToastContainer />
      <div className="habit-modal-cont">
        <div className="habit-modal-sec">
          <div className="modal-heading">New Habit</div>
          <div className="habit-name">
            <span>Name</span>
            <input
              type="text"
              placeholder="Achiver"
              value={habitData.name || props.data.name}
              name="name"
              onChange={HandelFormData}
            />
          </div>
          <div className="habit-name">
            <span>Goal Start</span>
            <input
              type="date"
              placeholder="14-04-2022"
              value={habitData.date || props.data.date}
              name="date"
              onChange={HandelFormData}
            />
          </div>
          <div className="habit-name">
            <span>Reminder</span>
            <input
              type="text"
              placeholder="You can do it"
              value={habitData.reminder || props.data.reminder}
              name="reminder"
              onChange={HandelFormData}
            />
          </div>

          <div className="modal-btn-sec edit-sec">
            <button onClick={() => props.IsopenModal(false)}>Cancel</button>
            <button onClick={() => upDatHabit(props.id, habitData)}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
