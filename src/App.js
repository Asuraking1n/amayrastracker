import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/LoginSignup/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
