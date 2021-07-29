import React, {useContext} from 'react';
import {UserContext} from "./UserContext";
import axios from "axios";

function Reviews() {
    const {user, setUser} = useContext(UserContext);

    let userReviews = user.reviews;

    // added here in case we need it (if UserContext doesn't work)
    // const getUser = (user) => {
    //     axios.get(`http://localhost:5000/api/users/${user._id}`)
    //         .then((res) => {
    //             setUser(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    // TODO: Reviews should render properly under Reviews on profile page


    return(
            <section id="Reviews">
                <div className="movie-cards-wrapper">
                        <div>
                            <h1>My Reviews</h1>
                            <div className="horizontal-line" />
                        </div>
                </div>
            <div>
                {userReviews.map((review, i) => {
                    // <SingleReview review={review} key={i} />) 
                    <p> Review number: {i} </p>
                 }
                )}
            </div>
            </section>

    );
}

export default Reviews;