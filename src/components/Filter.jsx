import React from "react";

const Filter = ({filterByTitle,filterByRating})=>{
    return(
        <div>
            <h1>filter by</h1>
            <button onClick={filterByTitle}>title</button>
            <button onClick={filterByRating}>rating</button>
        </div>
    )
}

export default Filter; 