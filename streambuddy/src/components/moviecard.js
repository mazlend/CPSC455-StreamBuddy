import React from 'react';
import '../App.css';

class Moviecard extends React.Component {

    render() {
        return <div id="moviecard">
            <div id="movie-name"><h4>The Matrix</h4></div>
            <div id="movie-image"><img alt="" src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"/></div>
            <button type="button" onClick={this.props.onClick}>
                Watch on Netflix
            </button>

        </div>;
    }
}

export default Moviecard;