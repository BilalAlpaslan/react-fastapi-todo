from pydantic import  BaseModel

class Todo(BaseModel):
    id: int
    text: str
    isCompleted: bool