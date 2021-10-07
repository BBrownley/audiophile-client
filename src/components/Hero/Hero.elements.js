import styled from "styled-components";

import heroBkgDesktop from "../../assets/home/desktop/image-hero.jpg";
import heroBkgTablet from "../../assets/home/tablet/image-header.jpg";
import heroBkgMobile from "../../assets/home/mobile/image-header.jpg";

export const Container = styled.div`
  height: 10rem;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url(${heroBkgDesktop});
  background-size: cover;
  padding-bottom: 41%;
  color: white;
  position: relative;
  margin-top: -5.5rem;

  .wrapper {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 55%;
    transform: translateY(-50%);

    &__inner {
      max-width: 400px;
      margin-left: 30%;
      transform: translateX(-50%);
      padding: 0.5rem;

      .new-product {
        margin-top: 0;
        letter-spacing: 10px;
        text-transform: uppercase;
        font-weight: 300;
        color: #828282;
      }

      h1 {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }

      button {
        margin-top: 1.25rem;
      }
    }
  }
  @media (max-width: 1050px) {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
      url(${heroBkgTablet});
    background-size: cover;
    padding-bottom: 73%;
    .wrapper {
      left: 50%;
      text-align: center;
      &__inner {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 650px) {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
      url(${heroBkgMobile}) center;
    background-size: cover;
    padding-bottom: 133%;
  }

  @media (max-width: 440px) {
    h1 {
      line-height: inherit;
      font-size: 2rem;
    }
  }

  @media (max-width: 340px) {
    margin-top: 3.75rem;
    .wrapper {
      top: 48%;
    }
  }
`;
