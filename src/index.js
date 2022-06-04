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
    if (text == "") return;
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
        <div class="input-group mb-3">
          <textarea
            type="text"
            class="form-control"
            placeholder="Add your notes"
            value={text}
            onChange={(e) => taskValueChange(e.target.value)}
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-warning"
            type="button"
            id="button-addon2"
            onClick={() => addTask()}
          >
            +
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="button"
            onClick={() => setFilter("all")}
          >
            All
          </button>{" "}
          <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="button"
            onClick={() => setFilter("done")}
          >
            <span>&#10004;</span>
          </button>{" "}
          <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="button"
            onClick={() => setFilter("not done")}
          >
            Remaining
          </button>
        </div>
      </div>
      <div className="notes">
        {tasks.map((note) => {
          if (filter === "all") {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={note.checked}
                    onClick={() => addCheck(note.id)}
                  />
                  {note.checked ? (
                    <p class="card-text" className="cut">
                      {note.name}
                    </p>
                  ) : (
                    <p class="card-text">{note.name}</p>
                  )}

                  <a
                    href="#"
                    onClick={() => deleteTask(note.id)}
                    class="card-link"
                  >
                    Delete
                  </a>
                </div>
              </div>
            );
          }
          if (filter === "done" && note.checked) {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <input class="form-check-input" type="checkbox" checked />
                  <p class="card-text" className="cut">
                    {note.name}
                  </p>

                  <a
                    href="#"
                    onClick={() => deleteTask(note.id)}
                    class="card-link"
                  >
                    Delete
                  </a>
                </div>
              </div>
            );
          }
          if (filter === "not done" && !note.checked) {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <p class="card-text">{note.name}</p>
                  <a
                    href="#"
                    onClick={() => deleteTask(note.id)}
                    class="card-link"
                  >
                    Delete
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
