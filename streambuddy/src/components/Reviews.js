import React, { useContext } from 'react';
import { UserContext } from "./UserContext";
import SingleReview from './SingleReview';

function Reviews(props) {
    const { user } = useContext(UserContext);

    let userReviews = user.reviews;
    console.log("userReviews are ", user.reviews);

    let nonNullReviews = userReviews.reduce(function (result, review) {
        if (review) {
            result.push(review);
        }
        return result;
    }, []);

    console.log("usable reviews are ", nonNullReviews)

    return (
        <section id="Reviews">
            <div className="movie-cards-wrapper">
                <div>
                    <h1>My Reviews</h1>
                    <div className="horizontal-line" />
                </div>
            </div>
            <div>
                {nonNullReviews.map((review, i) => (
                    <div>
                        <SingleReview review={review} hasRemove={props.hasRemove} key={i} />
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Reviews;