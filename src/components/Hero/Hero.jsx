import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./Hero.elements";

export default function Hero() {
  return (
    <Container>
      <div className="wrapper">
        <div className="wrapper__inner">
          <p className="new-product">New product</p>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/item/3">
            <button>See product</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
