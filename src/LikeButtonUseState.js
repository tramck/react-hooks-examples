import React, { useState } from 'react';


const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    return (
        <button onClick={() => setLiked(!liked)}>
            { liked ? 'Unlike' : 'Like'}
        </button>
    );
};


export default LikeButton;
