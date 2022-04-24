import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
