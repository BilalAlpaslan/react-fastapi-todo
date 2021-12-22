import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/todos").then(res => {
      console.log(res);
      setTodos(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, [])


  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  function changeCompleted(todo,e){
    todo.isCompleted = e.target.checked;
    axios.put(`http://127.0.0.1:8000/todos/${todo.id}`, todo)
    setTodos([...todos])
  }

  function deleteTodo(todo){
    axios.delete(`http://127.0.0.1:8000/todos/${todo.id}`)
    todos.splice(todos.indexOf(todo), 1)
    setTodos([...todos])
  }

  function addTodo(text){
    var todo={
      id : 0,
      text: text,
      isCompleted: false
    }
    axios.post("http://127.0.0.1:8000/todos/" , todo)
    setTodos([...todos, todo])
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center my-5">Todo List</h1>

        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodo(text) } className="btn btn-success">Add</button>
      </div>

      {todos.map((todo,i) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <input type="checkbox" checked={todo.isCompleted} onChange={(e)=> changeCompleted(todo,e)} />
          <button onClick={()=> deleteTodo(todo)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
