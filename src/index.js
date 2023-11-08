import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (e) => {
        setMyCar(e.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);