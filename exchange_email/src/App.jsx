import CreateUser from "./components/CreateUser";
import LoginUser from "./components/LoginUser";
import NavBar from "./components/navigation/navigationBar";
// import UserRoom from "./components/UserRoom";
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
          {/* <Route path="login/useroom" element={<UserRoom />} /> */}
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
