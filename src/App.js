import "./styles.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Admin } from "./Components/Admin";
import { User } from "./Components/User";
import { Company } from "./Components/Company";
export default function App() {
  return (
    <div className="App">
      <h1>Job Listing Portal</h1>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
    </div>
  );
}
/*
<Route path="/user" element={<User />}></Route>
        <Route path="/company" element={<Company />}></Route>

        */
