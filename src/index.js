import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import "./index.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

// function Test() {
//   const [val, setVal] = useState(0);

//   return (
//     <>
//       <h1>Balance: {(4000000000000 - 10 * val).toLocaleString()}</h1>
//       <div>
//         <p>Price: $10</p>
//         <button onClick={() => (val - 1 >= 0 ? setVal(val - 1) : null)}>
//           -
//         </button>
//         <input type="number" value={val} />
//         <button
//           onClick={() => {
//             setVal(val + 1);
//           }}
//         >
//           +
//         </button>
//         <p>Value: {10 * val}</p>
//       </div>
//     </>
//   );
// }

function TodoApp() {
  const [text, setText] = useState("Initial Text");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const taskValueChange = (val) => {
    setText(val);
  };

  useEffect(()=>{
    let temp = localStorage.getItem('tasks');
  
    if(temp)
    {
      setTasks(JSON.parse(temp));
    }
  },[]);
  const clearAll =()=>{
    localStorage.clear();
    setTasks([]);
  }

  const addTask = () => {
    if (text === "") return;
    setTasks([...tasks, { id: nanoid(), name: text, checked: false }]);
    setText("");
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addCheck = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
    });
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    let tasks_array = tasks.filter((task) => task.id != id);
    setTasks(tasks_array);
    localStorage.setItem('tasks', JSON.stringify(tasks_array));
    
  };

  const show = () => {
    let arr = tasks.filter((task) => task.checked === true);
    return arr;
  };
  // const onAlert = (name) => {
  //   alert(name + " test");
  // };
  return (
    <>
      <h1 className="heading">Todo App</h1>
      <TodoForm taskValueChange={taskValueChange} addTask={addTask} setFilter={setFilter} text={text} clearAll={clearAll}/>
      <TodoList addCheck={addCheck} tasks={tasks} deleteTask={deleteTask} filter={filter}/>
    </>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
