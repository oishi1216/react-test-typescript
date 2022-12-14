import { useState } from 'react';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text'
import { UserProfile } from './UserProfile';
import { User } from './types/user';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

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

  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      })}
      <br />
      <br />
      <button onClick={onClickFetchUser}>データ取得</button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ): loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
