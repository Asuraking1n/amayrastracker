import React from 'react'
import {useNavigate} from 'react-router-dom'
import ArchiveCard from '../../components/card/archiveCard/ArchiveCard'
import HabitNav from '../../components/HabitNavbar/HabitNav'
import Sidebar from '../../components/sidebar/Sidebar'
import { useHabit } from '../../context/habit-context'
import { useSelector } from 'react-redux'
import './habit.css'
const ArchiveList = () => {
  const navigate = useNavigate()
  const {archiveDataSet} = useHabit()
  const archiveData = useSelector(state=>state.habitData.archives)
  const token = localStorage.getItem('token')
  console.log(archiveData);
  return (
    <>
    <div className="habit-cont">
    <Sidebar/>
    <div className="habitside-sec">
        
        {token?<>
          <HabitNav title={"Archive Section"}/>
        {archiveData.length < 1 ?
              <div className='no-data-text'>
              <img src="https://theme.zdassets.com/theme_assets/643319/620072a09e8f5a5461c6048e9a089050f63892d5.gif" alt="nodata" />
                No Habbits in Acrhive Yet
              </div> :
              archiveData[0].map((val,index)=>{
                return <ArchiveCard key={index} data={val}/>
              })
              
            }
        </>:
        <div className='blank-div'>
          <img src="https://i.pinimg.com/originals/58/22/46/58224674a4868f695d1f0e4ff61bf959.gif" alt="login" />
          <span onClick={()=>navigate('/login')}>Please Click To Login</span>
        </div>
        }
    </div>
    </div>
    </>
  )
}

export default ArchiveList