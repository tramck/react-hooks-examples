import React, { Component } from 'react';


class LikeButton extends Component {

    state = {
        liked: false,
    };

    render() {
        const { liked } = this.state;
        return (
            <button onClick={() => this.setState({ liked: !liked })}>
                { liked ? 'Unlike' : 'Like'}
            </button>
        );
    }

}


export default LikeButton;
