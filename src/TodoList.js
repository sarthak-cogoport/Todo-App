export const TodoList = ({addCheck,tasks, deleteTask, filter})=>{
    return (
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
    )
}