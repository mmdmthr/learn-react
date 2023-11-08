import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take the shoot!</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);