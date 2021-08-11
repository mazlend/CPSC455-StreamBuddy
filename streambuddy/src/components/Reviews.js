import React, { useContext } from 'react';
import { UserContext } from "./UserContext";
import SingleReview from './SingleReview';

function Reviews(props) {
    const { user } = useContext(UserContext);

    let userReviews = user.reviews;

    // we have quite a few null review objects, need to delete them in the backend.
    // for now I just skip them
    let nonNullReviews = userReviews.reduce(function (result, review) {
        if (review) {
            result.push(review);
        }
        return result;
    }, []);

    return (
        <section id="Reviews">
            <div className="movie-cards-wrapper">
                <div>
                    <h1>My Reviews</h1>
                    <div className="horizontal-line" />
                </div>
            </div>
            <div>
                {nonNullReviews.map((review) => (
                    <SingleReview key={review.filmId} review={review} hasRemove={props.hasRemove} />
                ))}
            </div>
        </section>

    );
}

export default Reviews;