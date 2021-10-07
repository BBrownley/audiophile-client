import React from "react";
import styled from "styled-components";

import logo from "../../assets/shared/desktop/logo.svg";

const LogoEl = styled.div`
  background: url(${logo});
  height: 25px;
  width: 143px;

  @media (max-width: 340px) {
    &.navbar-logo {
      position: absolute;
      top: 2rem;
      transform: translateX(-50%);
    }
  }
`;

export default function Logo({ className }) {
  return <LogoEl className={className} />;
}
