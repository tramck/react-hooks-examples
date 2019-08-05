import React from 'react';
import './App.css';
import LikeButton from './LikeButtonUseState';
import FetchData from './FetchData';
import ClickCounter from './ClickCounter';

function App() {
    return (
        <div className="App">
            <h3>Like Button (useState)</h3>
            <LikeButton />


            <h3>Click Counter (useEffect)</h3>
            <ClickCounter />


            <h3>Fetch Data (useApi custom hook)</h3>
            <FetchData />
        </div>
    );
}

export default App;
