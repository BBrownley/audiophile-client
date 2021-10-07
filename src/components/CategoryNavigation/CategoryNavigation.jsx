import React from "react";
import { Link } from "react-router-dom";

import { Container, Category } from "./CategoryNavigation.elements";

export default function CategoryNavigation({ className }) {
  return (
    <Container className={className}>
      <div className="wrapper">
        <div className="category-nav__item">
          <div className="category-nav__item__img headphones"></div>
          <h6>Headphones</h6>
          <Link to="/headphones">
            <button className="tertiary">Shop</button>
          </Link>
        </div>
        <div className="category-nav__item">
          <div className="category-nav__item__img speakers"></div>
          <h6>Speakers</h6>
          <Link to="/speakers">
            <button className="tertiary">Shop</button>
          </Link>
        </div>
        <div className="category-nav__item">
          <div className="category-nav__item__img earphones"></div>
          <h6>Earphones</h6>
          <Link to="/earphones">
            <button className="tertiary">Shop</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
