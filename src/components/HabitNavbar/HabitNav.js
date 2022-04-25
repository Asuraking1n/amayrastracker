import React,{useState} from 'react'
import Moadal from '../moadal/Moadal'
import './habitnav.css'
const HabitNav = ({title}) => {
  const [isModal,setIsModal] = useState(false)
  return (
    <>
        <div className="habit-navbar-cont">
            <span>{title}</span>
            <div className="add-habit-btn">
                <button onClick={()=>setIsModal(true)}><span>+</span> <div>Add Habits</div></button>
            </div>
            {isModal&&<Moadal openModal={(isModal)=>setIsModal(isModal)}/>}
            
        </div>
    </>
  )
}

export default HabitNav