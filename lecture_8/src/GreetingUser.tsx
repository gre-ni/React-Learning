import { useState } from "react";

export const GreetingUser = () => {
    const [name, setName] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="Submit name"
            />
            {name && <p>Welcome, {name}</p>}
        </div>
    );
};
