import React from 'react'
import { useNavigate } from 'react-router-dom'
import HabitCard from '../../components/card/habitCard/HabitCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import { useSelector} from 'react-redux'
import './habit.css'
const HabitList = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const habitDataList = useSelector((state)=>state.habitData.habits)
  return (
    <>
      <div className="habit-cont">
        <Sidebar />
        <div className="habitside-sec">
          {token ? <>
            <HabitNav title={"Habit Section"} /> 
            {habitDataList.length < 1 ?
              <div className='no-data-text'>
              <img src="https://theme.zdassets.com/theme_assets/643319/620072a09e8f5a5461c6048e9a089050f63892d5.gif" alt="nodata" />
                No Habbits Yet, Add Brand New Habbits
              </div> :
              habitDataList[0].map((val,index)=>{
                return <HabitCard key={index} data={val}/>
              })
              
            }
          </> :
            <div className='blank-div'>
              <img src="https://i.pinimg.com/originals/58/22/46/58224674a4868f695d1f0e4ff61bf959.gif" alt="login" />
              <span onClick={() => navigate('/login')}>Please Click To Login</span>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default HabitList