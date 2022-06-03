import React, { useState } from "react";
import ReactDOM  from "react-dom";
import { nanoid } from "nanoid";
var notes = ["asdadas","Asdasda"]



function TodoApp(){
    const [text, setText] = useState("Initial Text");
    const [tasks, setTasks] = useState([]);
    const taskValueChange = (val) =>{
        setText(val);
    }

    const addTask = ()=>{
        setTasks([...tasks, {id:nanoid(),name:text}]);
        setText("");
    }
    const onAlert = (name) => {
        alert(name+" test");
    }
    return (
        <>
        <h1>Todo App</h1>
        <div>
        <input type="text" value={text} onChange={(e)=>taskValueChange(e.target.value)} placeholder="Type Here..." />
        <button onClick={()=>addTask()}>ADD</button>
        
        </div>
        <div>
            <ul>
            {tasks.map((note,i)=>{
            return <li key={note.id}>{note.name}</li>
            })}
            </ul>
        
        </div>
        </>
    );
}



ReactDOM.render(<TodoApp/>, document.getElementById("root"));