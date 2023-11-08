import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
    return <h3>Missed!</h3>;
}

function MadeGoal() {
    return <h3>Goal!</h3>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            { isGoal ? <MadeGoal /> : <MissedGoal /> }
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);