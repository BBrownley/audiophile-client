import styled, { css } from "styled-components";

const imgStyle = () => css`
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 8rem;

  .gallery-img {
    border-radius: 0.5rem;
  }

  .side-images {
    flex: 4;
  }

  .side-image-wrapper {
    position: relative;
    padding-bottom: 62.9%;
    &:first-of-type {
      margin-bottom: 2rem;
    }
    &:last-of-type {
      margin-top: 2rem;
    }
  }

  .main-image-wrapper {
    position: relative;
    padding-bottom: 50.2%;
    flex: 6;
    margin-left: 2rem;
  }

  @media (max-width: 1000px) {
    .side-image-wrapper {
      &:first-of-type {
        margin-bottom: 1.25rem;
      }
      &:last-of-type {
        margin-top: 1.25rem;
      }
    }

    .main-image-wrapper {
      margin-left: 1.25rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 4rem;
    .side-image-wrapper {
      padding-bottom: 53%;
    }
    .main-image-wrapper {
      margin-left: 0;
      margin-top: 1.25rem;
      padding-bottom: 112%;
    }
  }
`;

export const Image1 = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}

  @media (max-width: 1000px) {
    background-image: url(${props => props.tabletImg});
  }

  @media (max-width: 700px) {
    background-image: url(${props => props.mobileImg});
  }
`;

export const Image2 = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}

  @media (max-width: 1000px) {
    background-image: url(${props => props.tabletImg});
  }

  @media (max-width: 700px) {
    background-image: url(${props => props.mobileImg});
  }
`;

export const ImageMain = styled.div`
  background-image: url(${props => props.desktopImg});
  ${imgStyle()}

  @media (max-width: 1000px) {
    background-image: url(${props => props.tabletImg});
  }

  @media (max-width: 700px) {
    background-image: url(${props => props.mobileImg});
  }
`;
