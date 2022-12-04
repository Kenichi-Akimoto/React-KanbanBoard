import { useNavigate } from "react-router-dom";
import React from 'react';


export  const Task = () => {
  const navigate  = useNavigate();
  return (
  <div className="Task">
    <h1>Task</h1>
    <button onClick={() => navigate('/')}>ガントチャート</button>
  </div>
  );
};

export default Task;
