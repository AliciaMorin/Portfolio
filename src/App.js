import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Rdv from "./pages/Rdv.jsx";
import PageProjects from "./pages/PageProjects.jsx";
import PageDetailProjects from "./pages/PageDetailProjects.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rdv" element={<Rdv />}></Route>
          <Route path="/pageprojects" element={<PageProjects />}></Route>
          <Route path="/project/:id" element={<PageDetailProjects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
