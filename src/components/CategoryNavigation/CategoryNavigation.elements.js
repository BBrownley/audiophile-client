import styled from "styled-components";

import headphones from "../../assets/shared/desktop/image-headphones.png";
import speakers from "../../assets/shared/desktop/image-speakers.png";
import earphones from "../../assets/shared/desktop/image-earphones.png";

export const Container = styled.div`
  margin: 20rem auto 0 auto;
  position: relative;
  height: 284px;
  max-width: 1110px;
  .wrapper {
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .category-nav__item {
      height: 71.8%;
      border-radius: 0.5rem;
      background-color: ${props => props.theme.colors.white500};
      flex: 1;
      margin: 0 1rem;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;

      @media (max-width: 800px) {
        margin: 0 0.5rem;
      }

      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }

      h6 {
        letter-spacing: 1.3px;
        margin: 0;
      }

      button {
        margin-bottom: 1.875rem;
        margin-top: 1rem;
      }

      &__img {
        position: absolute;
        bottom: 4.5rem;
        &.headphones {
          background: url(${headphones});
          background-size: cover;
          height: 211px;
          width: 219px;
        }
        &.speakers {
          background: url(${speakers});
          background-size: cover;
          height: 204px;
          width: 219px;
        }
        &.earphones {
          background: url(${earphones});
          background-size: cover;
          height: 190px;
          width: 219px;
        }
      }
    }
  }
  @media (max-width: 660px) {
    height: 630px;
    margin: 10rem auto 0 auto;
    .wrapper {
      flex-direction: column;
      justify-content: space-between;
      .category-nav__item {
        width: 100%;
        height: 165px;
        margin: 0;
        flex: initial;
        button {
          margin-bottom: 1.625rem;
          margin-top: 1rem;
        }
        &__img {
          /* bottom: 3rem; */
          &.headphones {
            background: url(${headphones});
            background-size: cover;
            height: 159px;
            width: 164px;
          }
          &.speakers {
            background: url(${speakers});
            background-size: cover;
            height: 153px;
            width: 164px;
          }
          &.earphones {
            background: url(${earphones});
            background-size: cover;
            height: 142px;
            width: 164px;
          }
        }
      }
    }
  }
`;

export const Category = styled.div`
  /* border: 2px dashed blue;
  flex: 1;
  margin: 0 1.25rem; */
`;
