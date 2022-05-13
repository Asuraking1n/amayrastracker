import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";
import HabitList from "./pages/habitListing/HabitList";
import ArchiveList from "./pages/habitListing/ArchiveList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/habit-listing" element={<HabitList/>} />
        <Route path="/archive-listing" element={<ArchiveList/>} />
      </Routes>
    </>
  );
}

export default App;
