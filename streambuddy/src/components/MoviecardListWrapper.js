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
          {denseView 
          ? <MoviecardListDense list={props.list} />
          : <MoviecardList list={props.list} />
          }
        </div>
      </div>
    </section>
  );
}
