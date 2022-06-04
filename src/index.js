import React, { useState } from "react";
import ReactDOM from "react-dom";
import { nanoid } from "nanoid";

import "./index.css";

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

  const addTask = () => {
    setTasks([...tasks, { id: nanoid(), name: text, checked: false }]);
    setText("");
  };

  const addCheck = (id) => {
    tasks.map((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
    });
    setTasks([...tasks]);
  };

  const deleteTask = (id) => {
    let tasks_array = tasks.filter((task) => task.id != id);
    setTasks(tasks_array);
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
      <div className="text">
        <input
          type="text"
          value={text}
          onChange={(e) => taskValueChange(e.target.value)}
          placeholder="Type Here..."
        />
        <button onClick={() => addTask()}>+</button>{" "}
        <button onClick={() => setFilter("all")}>All</button>{" "}
        <button onClick={() => setFilter("done")}>Show Done</button>{" "}
        <button onClick={() => setFilter("not done")}>
          Not completed
        </button>
      </div>
      <div className="notes">
        {tasks.map((note) => {
          if (filter === "all") {
            return (
              <div className="note" key={note.id}>
                <input
                  type="checkbox"
                  checked={note.checked}
                  onClick={() => addCheck(note.id)}
                />
                {note.checked ? (
                  <span className="cut">{note.name} </span>
                ) : (
                  <span> {note.name}</span>
                )}
                <button onClick={() => deleteTask(note.id)}>-</button>
              </div>
            );
          }
          if (filter === "done" && note.checked) {
            return (
              <div className="note" key={note.id}>
                <input type="checkbox" checked />

                <span className="cut">{note.name} </span>

                <button onClick={() => deleteTask(note.id)}>-</button>
              </div>
            );
          }
          if (filter === "not done" && !note.checked) {
            return (
              <div className="note" key={note.id}>
                <span>{note.name} </span>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
