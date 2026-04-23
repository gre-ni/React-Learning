export type TodoItemProps = {
    id: number;
    title: string;
    completed?: boolean;
    onChange?: () => void;
};

export const TodoItem = ({ id, title, onChange }: TodoItemProps) => {
    return (
        <div>
            <input
                type="checkbox"
                id={`${id}`}
                value={title}
                onChange={onChange}
            />
            <label htmlFor={`${id}`}>{title}</label>
        </div>
    );
};
