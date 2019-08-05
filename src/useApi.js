import { useState } from 'react';
import mockFetchAdvertiser from './mockFetchAdvertiser';


const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const fetchFromApi = async (query) => {
        setLoading(true);
        const results = await mockFetchAdvertiser(query);
        setResults(results);
        setLoading(false);
    }

    return [loading, results, fetchFromApi];
}

export default useApi;
