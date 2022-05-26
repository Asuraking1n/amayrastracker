import React, { useState } from 'react'
import './habitCard.css'
import EditModal from '../../moadal/EditModal'
import { useStopwatch } from 'react-timer-hook';
import { LineChart, Line } from "recharts";
import { useDispatch } from 'react-redux'
import {  dltFromHabit, addToArchive } from '../../../redux/reducers/HabitSlice'
const HabitCard = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const [isDone, setIsDone] = useState(false || localStorage.getItem(`${props.data._id}`))
  const dispatch = useDispatch()


  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  const dataList = [
    {
      name: props.data.date,
      uv: 0,
      pv: 0,
      amt: 0
    },
    {
      name: props.data.date,
      uv: minutes,
      pv:minutes,
      amt: 10
    },
    {
      name: props.data.date,
      uv: seconds,
      pv: seconds,
      amt: 10
    },
  
  ];


  const addtoArchive =  (id) => {
    dispatch(addToArchive(id))
  }


  const completeHabitHandler=()=>{
    localStorage.setItem(`${props.data._id}`,true)
    setIsDone(true)
  }



  const dltHabit = (id) => {
    dispatch(dltFromHabit(id))
  }



  return (
    <>
      <div className="habit-cont-sec">
      <div className="done-overlay" style={{display:!isDone?'none':'block'}}> <span onClick={()=>setIsDone(false) && localStorage.setItem(`${props.data._id}`,false)}>X</span> </div>
        <div className="habit-card-sec">
          <div className="card-profile">
            <img src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif" alt="profile" />
          </div>
          <div className="card-user-name">
            <span>{props.data.name}</span>
            <span>{props.data.date}</span>
          </div>
          <div className="card-btn-sec">
            <button onClick={() => addtoArchive(props.data._id)}>Add To Archive</button>
            <button onClick={()=>dltHabit(props.data._id)}>Delete</button>
            <button onClick={() => setOpenModal(true)}>Edit</button>
            {openModal && <EditModal IsopenModal={(openModal) => setOpenModal(openModal)} data={props.data} id={props.data._id} />}
            <button onClick={completeHabitHandler}>Done</button>

          </div>
        </div>
        <div className="stats-cont">
        <div className='pomodoro'>
          <div className='pomodoro-timer'>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <p>{isRunning ? 'Running' : 'Not running'}</p>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
        <span>STATS : </span>
        <LineChart width={300} height={100} data={dataList} style={{zIndex:"-2"}}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        </div>
      </div>
    </>
  )
}

export default HabitCard