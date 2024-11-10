import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../app/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
