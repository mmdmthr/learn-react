import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add empty array for dependency

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
