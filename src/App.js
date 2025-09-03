import React, {useState} from "react";
import './App.css';
import ToggleButton from './ToggleButton'; 

function App() {
  const [tsk, setTsk] = useState([]);
  const [nTsk, setNTsk] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //Adding
  const addT = () => {
    if(nTsk === "")return;
    setTsk([...tsk, {id: Date.now(), text: nTsk, cmpl: false}]);
    setNTsk("");
  };


  //Deleting
  const delT = (id) => {
    setTsk(tsk.filter((task) => task.id !== id));
  };

  //Completing
  const toggleCmpl = (id) => {
    setTsk(
      tsk.map((task)=>
        task.id === id ? {...task, cmpl: !task.cmpl} : task
      )
    );
  };


  return(
    <div className="app">
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={nTsk}
          placeholder="Enter a task..."
          onChange={(e) => setNTsk(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addT()}
        />
        <button onClick={addT}>+</button>
      </div>


      <ul className="task-list">
        {tsk.map((task) => (
          <li key={task.id} className={task.cmpl ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.cmpl}
              onChange={() => toggleCmpl(task.id)}
            />
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => delT(task.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div style={{ padding: '2rem' }}>
      <ToggleButton />
    </div>

    </div>

  );
}

export default App;
