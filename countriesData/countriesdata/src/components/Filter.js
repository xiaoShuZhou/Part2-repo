import React from "react";

const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
        <p>Find countries</p>
        <input value={filter} onChange={handleFilterChange} />
        </div>
    );
    };

export default Filter;