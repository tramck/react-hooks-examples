import React from 'react';
import './App.css';
import LikeButton from './LikeButtonUseState';
import FetchData from './FetchData';
import ClickCounter from './ClickCounter';

function App() {
    return (
        <div className="App">
            <h3>LikeButton (useState)</h3>
            <LikeButton />

            <hr />

            <h3>ClickCounter (useEffect)</h3>
            <ClickCounter />

            <hr />

            <h3>FetchData (useApi custom hook)</h3>
            <FetchData />
        </div>
    );
}

export default App;
