import axios from "axios";


export async function getTodo() {
    var res = await axios.get("http://127.0.0.1:8000/todos")
    console.log(res);
    return res.data;
}

export function changeCompleted(todo, e) {
    todo.isCompleted = e.target.checked;
    axios.put(`http://127.0.0.1:8000/todos/${todo.id}`, todo).then(res => {
        return res.data;
    });
}