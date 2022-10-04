import { TodoType } from "./types/todo"
import { FC } from 'react';

// Pick<TodoType, "userId" | "title" | "completed"> Pickなら記載した型のみを定義
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "[完]" : "[未]";
    return <p>{completeMark} {title}（ユーザー:{userId}）</p>
}