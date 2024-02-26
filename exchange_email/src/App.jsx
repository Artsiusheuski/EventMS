import CreateUser from "./components/CreateUser";
import NavBar from "./components/navigation/navigationBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoom from "./components/userRoom/UserRoom";
import LoginUser from "./components/LoginUser";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/login/useroom" element={<UserRoom />} />

          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
