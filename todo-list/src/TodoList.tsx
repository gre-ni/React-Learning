import { type TodoItemProps, TodoItem } from "./TodoItem.js";
import { useState } from "react";

const defaultList: TodoItemProps[] = [
    {
        id: 1,
        title: "Do this",
        completed: false,
    },
];

export const TodoList = () => {
    const [list, setList] = useState<TodoItemProps[]>(defaultList);
    const [textInput, setTextInput] = useState<string>("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTextInput(event.target.value);
        console.log(textInput);
    };

    return (
        <div>
            {list.map((item) => (
                <TodoItem
                    id={item.id}
                    title={item.title}
                    completed={item.completed}
                />
            ))}
            <input
                type="text"
                value={textInput}
                placeholder="What do you want to do?"
                onChange={handleInput}
            />
            {/* <submit></submit> */}
        </div>
    );
};
