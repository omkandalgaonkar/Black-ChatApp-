import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Chat from "./pages/Chat.js";
import { SetAvatar } from "./pages/SetAvatar.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Chat />} />
        <Route exact path="/setAvatar" element={<SetAvatar />} />
      </Routes>
    </Router>
  );
}
export default App;
