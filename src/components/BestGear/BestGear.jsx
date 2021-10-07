import React from "react";

import { Container } from "./BestGear.elements";

export default function BestGear() {
  return (
    <Container>
      <div className="desc">
        <h2>
          Bringing you the <span className="primary">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="img-wrapper">
        <div className="img-wrapper__img"></div>
      </div>
    </Container>
  );
}
