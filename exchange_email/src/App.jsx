import CreateUser from "./components/CreateUser";
import NavBar from "./components/navigation/navigationBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoom from "./components/userRoom/UserRoom";
import LoginUser from "./components/LoginUser";
import ShowUser from "./components/showUser/ShowUser";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/login/useroom" element={<UserRoom />} />
          <Route path="/login/useroom/scanemail" element={<ShowUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
