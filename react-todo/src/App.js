import { useState } from "react";

function App() {


  const [todos, setTodos] = useState([
    { "text": "Learn React", "isCompleted": true },
    { "text": "Learn Redux", "isCompleted": false },
    { "text": "Learn React Router", "isCompleted": false },
    { "text": "Learn React-Router-Dom", "isCompleted": false },
  ])

  function changeCompleted(index){
    todos[index].isCompleted = !todos[index].isCompleted;
    console.log(todos[index].isCompleted)
    setTodos([...todos])
  }



  const [text, setText] = useState("başlangıç");

  return (
    <div>


      <div>{text}</div>
      <input  onChange={e => setText(e.target.value)} />




      {todos.map((todo,i) => (
        <div key={i}>
          <div>{todo.text}</div>
          <input type="checkbox" checked={todo.isCompleted} onChange={()=> changeCompleted(i)} />
        </div>
      ))}

    </div>
  );
}

export default App;
