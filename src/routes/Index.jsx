import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../app/auth/login/Login";
import Register from "../app/auth/register/Register";
function AppRouter() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
