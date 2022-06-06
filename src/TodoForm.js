export const TodoForm = ({taskValueChange, addTask, setFilter, text,clearAll})=>{
    return (
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
            class="btn btn-outline-primary"
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
            class="btn btn-primary btn-sm"
            data-bs-toggle="button"
            onClick={() => setFilter("all")}
          >
            All
          </button>{" "}
          <button
            type="button"
            class="btn btn-success btn-sm"
            data-bs-toggle="button"
            onClick={() => setFilter("done")}
          >
            Done
          </button>{" "}
          <button
            type="button"
            class="btn btn-danger btn-sm"
            data-bs-toggle="button"
            onClick={() => setFilter("not done")}
          >
            Remaining
          </button>
          <button
            type="button"
            class="btn btn-info btn-sm"
            data-bs-toggle="button"
            onClick={() => clearAll()}
          >
            Clear All
          </button>
        </div>
      </div>
    );
}