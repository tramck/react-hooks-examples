import React, { Component } from 'react';


class ClickCounter extends Component {

    state = {
        count: 0,
    };

    updateTitle() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidMount() {
        this.updateTitle();
    }

    componentDidUpdate() {
        this.updateTitle();
    }

    render() {
        const { count } = this.state;

        return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => this.setState({ count: count + 1 })}>
            Click me
            </button>
        </div>
        );
    }

}


export default ClickCounter;
