import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

function Football() {
    const shoot = (a, b) => {
        alert(b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
    }

    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shoot!</button>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);