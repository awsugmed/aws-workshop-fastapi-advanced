import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Dashboard from "./components/Dashboard.jsx";
import Page2 from "./components/Page2.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
// import Register from "./components/RegisterDeprecated.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/page2" element={<Page2 />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  </BrowserRouter>
);
