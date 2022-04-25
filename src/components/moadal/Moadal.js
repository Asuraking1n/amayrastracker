import React from "react";
import "./modal.css";
const Moadal = (props) => {
    return (
        <>
            <div className="habit-modal-cont">
                <div className="habit-modal-sec">
                    <div className="modal-heading">New Habit</div>
                    <div className="habit-name">
                        <span>Name</span>
                        <input type="text" placeholder="Achiver"/>
                    </div>
                    <div className="habit-name">
                        <span>Goal Start</span>
                        <input type="date" placeholder="14-04-2022"/>
                    </div>
                    <div className="habit-name">
                        <span>Reminder</span>
                        <input type="text" placeholder="You can do it"/>
                    </div>

                    <div className="modal-btn-sec">
                        <button onClick={()=>props.openModal(false)}>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Moadal;
