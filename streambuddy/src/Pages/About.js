import React from 'react';
import {Container} from "@material-ui/core";

function About() {

    return(
        <Container maxWidth="lg">
            <br />
            <br />
            <div>
                <h2> About StreamBuddy </h2>
            </div>
            <br />
            <p>Say goodbye to the endless scrolling of Netflix menus!
                With StreamBuddy, you can check if a movie that you want to watch is available on Netflix.
                Unsure about what movie you want to watch?
                Use our advanced search features to see recommendations for movies (available on Netflix) that fit your criteria.


                Streambuddy enables you to discover films and TV shows currently streaming Netflix.
                You are kept posted with what is new Netflix.
                Our advanced search option allows you to filter films and TV shows by title, genre, year released, actor, director, language, and more.
                Users can create a profile and track what they have already seen, maintain a watchlist, post ratings and reviews, and follow other users.

                What will you get if you login?
                Add movies to your watch and scene lists, rate and review movies!

                Who is it for?
                Anyone who likes to watch movies / TV shows using online streaming platforms.

                What will it do? (What "human activity" will it support?)
                Recommend the user which movies to watch on the streaming platform on their choice based on their search criteria.

                Users can search movies by title, genre, rating, genre, release date, director, producer, actor, duration.

                Users can create an account and make their profile private or public. Users can add previously watched movies to their watched list and add films they would like to watch to their watch list.

                What type of data will it store?
                List of movie data (name, producer, rating, duration, actors etc.) on various streaming services based on geographical location. User account information (credentials, preferences, and watch list).
            </p>
            <br />
            <br />


        </Container>
    );
}

export default About;