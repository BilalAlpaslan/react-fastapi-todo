from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Body

from models import Todo

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = [
    { "id":1,"text": "Learn React", "isCompleted": True },
    { "id":2,"text": "Learn Redux", "isCompleted": False },
    { "id":3,"text": "Learn React Router", "isCompleted": False },
    { "id":4,"text": "Learn React-Router-Dom", "isCompleted": False },
]

@app.get('/')
def root():
    return {'message': 'Hello World'}

@app.get('/todos')
def read_todos():
    return data

@app.put('/todos/{todo_id}')
def update_todo(todo_id: int, todo_obj: Todo):
    for todo in data:
        if todo['id'] == todo_id:
            todo['isCompleted'] = todo_obj.isCompleted
            return todo
        
@app.post('/todos')
def create_todo(todo_obj: Todo):
    todo_obj.id = len(data) + 1
    data.append(todo_obj.dict())
    return todo_obj

@app.delete('/todos/{todo_id}')
def delete_todo(todo_id: int):
    for todo in data:
        if todo['id'] == todo_id:
            data.remove(todo)
            return {'message': 'Todo deleted'}