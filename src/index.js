import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };
    
    const addTodo = () => {
        setTodos([...todos, "New Todo"]);
    };

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);