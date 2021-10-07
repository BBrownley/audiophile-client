import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./NavLinks.elements";

export default function NavLinks({ footer }) {
  return (
    <Container footer={footer}>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/headphones">headphones</Link>
        </li>
        <li>
          <Link to="/speakers">speakers</Link>
        </li>
        <li>
          <Link to="/earphones">earphones</Link>
        </li>
      </ul>
    </Container>
  );
}
