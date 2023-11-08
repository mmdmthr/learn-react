import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

function Garage() {
    const cars = [
        { id: 1, brand: 'Ford'},
        { id: 1, brand: 'BMW'},
        { id: 1, brand: 'Audi'}
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => (
                    <Car key={car.id} brand={car.brand} />
                ))}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);