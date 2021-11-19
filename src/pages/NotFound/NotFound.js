import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center" style={{ margin: "180px 0" }}>
            <h1 style={{ fontSize: "200px" }}>404</h1>
            <h1>Page Not Found</h1>
            <Link to="/">
                <button className="btn btn-info"> Go Back </button>
            </Link>
        </div>
    );
};

export default NotFound;