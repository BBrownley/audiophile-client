import React from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

import NavLinks from "../NavLinks/NavLinks";

import Logo from "../shared/Logo";

import { Container, Socials } from "./Footer.elements";

export default function Footer() {
  const width = useScreenWidth();

  return (
    <Container>
      <div className="accent"></div>
      <div className="footer-top">
        <Logo className="footer-top__logo" />
        <NavLinks footer />
      </div>
      <div className="footer-bottom">
        <div className="about">
          <p className="about__main">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          {width > 965 && (
            <p className="about__copyright">
              Copyright 2021. All Rights Reserved
            </p>
          )}
        </div>
        {width > 965 && (
          <Socials>
            <div className="icon-fb"></div>
            <div className="icon-twitter"></div>
            <div className="icon-instagram"></div>
          </Socials>
        )}
      </div>

      {width <= 965 && (
        <div className="footer-bottom__tablet">
          <p>Copyright 2021. All Rights Reserved</p>
          <Socials className="socials">
            <div className="icon-fb"></div>
            <div className="icon-twitter"></div>
            <div className="icon-instagram"></div>
          </Socials>
        </div>
      )}
    </Container>
  );
}
