import CreateUser from "./components/createUser";
import LoginUser from "./components/loginUser";
import NavBar from "./components/navigation/navigationBar";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [stateRes, setstateRes] = useState(false);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateUser />} />
          {/* <Route path="/register" element={<CreateUser />} /> */}
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
