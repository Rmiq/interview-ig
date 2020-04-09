import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

const App = () => {

    const [ sortState, setSortState] = useState(0);

    const handleClick = () => {
        setSortState(!sortState);
    }

    return (
        <div className="App">
            <h1>Interview task</h1>
            <button onClick={handleClick}>{sortState ? "Sort by URL" : "Sort by id"}</button>

            {/* Your solution goes here */}

        </div>
    );
}

export default App;