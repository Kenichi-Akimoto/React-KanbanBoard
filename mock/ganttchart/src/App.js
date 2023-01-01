import React from 'react';
import './App.css';
import GanttChart from './GanttChart/GanttChart.js';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Task from './TaskTest.js';
import ListEdit from "./ListEdit/ListEdit.js"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ListEdit />} />
          <Route path="/GanttChart" exact element={<GanttChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;