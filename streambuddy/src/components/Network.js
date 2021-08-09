import React, {useContext} from 'react';
import AllUserCards from "./AllUserCards";
import Friends from "./Friends";
import {UserContext} from "./UserContext";

function Network(props) {
    const {user} = useContext(UserContext);

    return(
        <section id={props.id}>
            <div>
                <div>
                    <h1>Followers</h1>
                    <div className="horizontal-line"/>
                </div>
                <Friends friends={user.followers}/>
            </div>
            <br />
            <div>
                <div>
                    <h1>Following</h1>
                    <div className="horizontal-line"/>
                </div>
                <Friends friends={user.following}/>
            </div>
            <br />
            <div>
                <div>
                    <h1>All Users</h1>
                    <div className="horizontal-line"/>
                </div>
                <AllUserCards />
            </div>
        </section>
    );
}


export default Network;
