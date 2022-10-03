import { useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';

function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  }
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} userid={todo.userid} />
      })}
    </div>
  );
}

export default App;
