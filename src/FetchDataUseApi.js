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
            {loading ? (
                <h3>LOADING...</h3>
            ) : (
                <div>
                    <textarea disabled value={JSON.stringify(results)} />
                </div>
            )}
        </div>
    );
}

export default FetchData;
