import React from 'react';
import './App.css';
import GanttChart from './GanttChart.js';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Task from './TaskTest.js';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<GanttChart />} />
          <Route path="/Task" exact element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;