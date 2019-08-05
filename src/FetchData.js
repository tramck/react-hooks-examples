import React, { Component } from 'react';
import mockFetchAdvertiser from './mockFetchAdvertiser';


class FetchData extends Component {

    state = {
        loading: false,
        query: '',
        results: {}
    }

    async fetchFromApi() {
        const { query } = this.state;
        this.setState({ loading: true });
        const results = await mockFetchAdvertiser(query);
        this.setState({ results, loading: false });
    }

    render() {
        const { loading, results } = this.state;

        return (
            <div>
                <div>
                    <input onChange={(e => this.setState({ query: e.target.value }))} />
                    <button onClick={() => this.fetchFromApi()}>Go!</button>
                </div>
                <div>
                    <textarea disabled value={loading ? 'LOADING...' : JSON.stringify(results)} />
                </div>
            </div>
        );
    }

}

export default FetchData;
