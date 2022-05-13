import { createContext,useContext,useState } from "react";

const habitContext = createContext()

const HabitProvider=({children})=>{
    const [habitDataSet,setHabitDataSet] = useState([])
    const [archiveDataSet,setArchiveDataSet] = useState([])
    return(<>
        <habitContext.Provider value={{habitDataSet,setHabitDataSet,archiveDataSet,setArchiveDataSet}}>
            {children}
        </habitContext.Provider>
    </>)
}


const useHabit =()=>useContext(habitContext)

export {HabitProvider,useHabit}