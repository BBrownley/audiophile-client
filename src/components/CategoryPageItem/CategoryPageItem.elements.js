import styled, { css } from "styled-components";

const baseUrl = "https://audiophile-backend.herokuapp.com";

export const Container = styled.div`
  /* border: 2px dashed; */
  flex-direction: ${props => (props.index % 2 === 0 ? "row" : "row-reverse")};
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto 10rem auto;
  > * {
    flex: 1;
    /* border: 1px dashed green; */
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 8rem;
  }
`;

export const ImageWrapper = styled.div`
  padding-bottom: 49%;
  position: relative;

  @media (max-width: 850px) {
    padding-bottom: 85%;
  }
`;

export const ItemImage = styled.div`
  background: url(${props => `${baseUrl}${props.desktopImgUrl}`});
  padding-bottom: 40%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 850px) {
    background: url(${props => `${baseUrl}${props.tabletImgUrl}`});
    background-size: cover;
    background-position: center;
  }
`;
export const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;

  ${props => {
    if (props.index % 2 === 0) {
      return css`
        margin-left: 8rem;
      `;
    } else {
      return css`
        margin-right: 8rem;
      `;
    }
  }}

  @media (max-width: 1050px) {
    ${props => {
      if (props.index % 2 === 0) {
        return css`
          margin-left: 4rem;
        `;
      } else {
        return css`
          margin-right: 4rem;
        `;
      }
    }}
  }

  @media (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5.75rem;
    text-align: center;
  }

  .details-wrapper {
    margin-top: -3rem;
    .new-product {
      color: ${props => props.theme.colors.primary};
      letter-spacing: 10px;
      font-size: 0.875rem;
      margin-top: 0;
    }

    h2 {
      margin-top: 0;
    }

    button {
      margin-top: 2rem;
    }
  }

  @media (max-width: 360px) {
    margin-top: 4.5rem;
    h2 {
      font-size: 1.75rem;
      line-height: auto;
    }
  }
`;
