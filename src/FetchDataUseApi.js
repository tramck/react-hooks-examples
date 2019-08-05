import React, { useState } from 'react';
import useApi from './useApi';

const FetchData = () => {
    const [query, setQuery] = useState('');
    const [loading, results, fetchFromApi] = useApi();

    return (
        <div>
            <div>
                <input onChange={(e => setQuery(e.target.value))} />
                <button onClick={() => fetchFromApi(query)}>Go!</button>
            </div>
            <div>
                <textarea disabled value={loading ? 'LOADING...' : JSON.stringify(results)} />
            </div>
        </div>
    );
}

export default FetchData;
