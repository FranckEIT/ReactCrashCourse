import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>That page doesn't exist...</p>
            <Link to={'/'}>Go back to the main page</Link>
        </div>
    );
};

export default NotFound;
