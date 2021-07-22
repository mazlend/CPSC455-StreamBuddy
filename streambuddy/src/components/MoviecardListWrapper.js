import React from "react";
import MoviecardList from "./MoviecardList";
import MoviecardListDense from "./MoviecardListDense";

export default function MoviecardListWrapper(props) {
  const [denseView, setDenseView] = React.useState(props.denseView);

  return (
    <section id={props.id}>
      <div className="movie-cards-wrapper">
        {props.name && (
          <div>
            <h1>{props.name}</h1>
            <div class="horizontal-line" />
          </div>
        )}
        <div>
          {denseView ? (
            <MoviecardListDense name={props.name} movieList={props.movieList} />
          ) : (
              <p>This is where movies in user's watchlist will appear!</p>
            // <MoviecardList name={props.name} movieList={props.movieList} />
          )}
        </div>
      </div>
    </section>
  );
}
