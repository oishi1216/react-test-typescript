import { useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text'
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: "名無し",
  hobbies: ["映画", "ゲーム"]
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  }
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      })}
    </div>
  );
}

export default App;
