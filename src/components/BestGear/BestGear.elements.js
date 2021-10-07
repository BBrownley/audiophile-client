import styled from "styled-components";

import bestGearDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "../../assets/shared/mobile/image-best-gear.jpg";

export const Container = styled.div`
  display: flex;
  max-width: 1110px;
  margin: 0 auto;
  margin-top: 20rem;
  margin-bottom: 12.5rem;
  > * {
    flex: 1;
  }
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      padding-right: 19%;
      margin: 0;
    }
    h2 {
      margin-bottom: 1rem;
      .primary {
        color: ${props => props.theme.colors.primary};
      }
    }
    p {
      margin-top: 1rem;
      color: #7d7d7d;
    }
  }
  .img-wrapper {
    padding-bottom: 54%;
    position: relative;
    &__img {
      border-radius: 0.5rem;
      background: url(${bestGearDesktop});
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin-left: 1rem;
    }
  }
  @media (max-width: 1040px) {
    margin-bottom: 5.75rem;
    flex-direction: column-reverse;
    .img-wrapper {
      padding-bottom: 42%;
      &__img {
        background: url(${bestGearTablet});
        background-size: cover;
        margin-left: 0;
      }
    }
    .desc {
      margin: 4rem auto 0 auto;
      text-align: center;
      width: 90%;
      > * {
        padding-right: 0;
      }
    }
  }
  @media (max-width: 660px) {
    margin-top: 10rem;
  }
  @media (max-width: 630px) {
    margin-bottom: 7.5rem;
    .img-wrapper {
      padding-bottom: 92%;
      &__img {
        background: url(${bestGearMobile});
        background-size: cover;
        margin-left: 0;
      }
    }
    .desc {
      margin-top: 2rem;
      h2 {
        font-size: 1.75rem;
        margin-bottom: 0;
      }
    }
  }
`;
