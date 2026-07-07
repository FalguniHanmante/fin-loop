import { Routes, Route } from "react-router";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import "./App.css";

function App() {
  return (
    <>
      {/* <div className="m-[10px] text-2xl font-bold text-emerald-800">
        FinLoop App
      </div> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
