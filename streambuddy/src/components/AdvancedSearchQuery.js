import React, {useState}  from "react";
import netflixMovieList from './../netflixMovieList.json';


function AdvancedSearchQuery () {
    const data = netflixMovieList;
    const initialList = data;
    const [list, setList] = React.useState(initialList);



    // function filterByName(text) {
    //     {data.filter(item => item.Title.toString().includes(text)).map(filteredMovie => (
    //         <li>
    //             {filteredMovie.Title}
    //         </li>
    //     ))}
    // }

    function filterByYear() {
        {data.filter(item => item["Year of release"].toString().includes("2001")).map(filteredMovie => (
            <li>
                {filteredMovie.Title}
            </li>
        ))}
    }

    function renderList() {
        {data.map((item) => (<ul><li>{item.Title} Release Year: {item["Year of release"]}</li></ul>))}
    }

    function sayHello() {
        alert('Hello!' + JSON.stringify(data));
    }

    return (
        <div>
            <button onClick={renderList}>Show all Movies</button>
            <button onClick={sayHello}>FilterByName</button>
            <button onClick={filterByYear}>FilterByYear</button>
            <ul>
                {data.map((item) => (<div>{item.Title} Release Year: {item["Year of release"]}</div>))}
            </ul>
        </div>

    );
}

export default AdvancedSearchQuery;