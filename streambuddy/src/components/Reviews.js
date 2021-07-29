import React from 'react';
import {Container} from "@material-ui/core";

function Reviews(props) {

    return(
            <section id={props.id}>
                <div className="movie-cards-wrapper">
                        <div>
                            <h1>My Reviews</h1>
                            <div className="horizontal-line" />
                        </div>
                </div>
            <div>
               <p>
                Reviewed Movies contains all movies the user reviewed in some form. They could have hit a 'recommend to friends' button and added some tags/hashtags/comments to it;
                they could have added a formal review, some private notes, or given a rating for it. <br/>
                The user can sort by year, alphabet, user rating. They can filter by liked and recommended by friends. <br />
                If a movie is in ReviewedMovies it assumes the user has watched it (as you cannot review a movie you haven't seen). We thus don't need a "Already watched" tab.
               </p>
            </div>
            </section>

    );
}

export default Reviews;