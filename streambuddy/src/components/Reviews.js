import React from "react";
import { Container } from "@material-ui/core";

function Reviews(props) {
  // further ideas: user could use a "recommend to friends" button and add some tags.
  // user should be able to sort etc

  return (
    <Container maxWidth="lg">
      <section id={props.id}>
        <div>
          <h1>{props.name}</h1>
          <div class="horizontal-line" />
        </div>
      </section>
    </Container>
  );
}

export default Reviews;
