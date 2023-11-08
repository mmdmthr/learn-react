import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

function Garage() {
    const carName = "Ford"
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={ carName }/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);