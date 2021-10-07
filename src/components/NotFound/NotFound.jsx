import React from "react";
import { Container, HeaderBkg } from "./NotFound.elements";

import { Link, useHistory } from "react-router-dom";

export default function NotFound() {
  const history = useHistory();

  return (
    <Container>
      <HeaderBkg />
      <h2>404</h2>
      <p>
        Not found :( sorry!{" "}
        <Link onClick={() => history.goBack()}>Go back</Link>
      </p>
    </Container>
  );
}
