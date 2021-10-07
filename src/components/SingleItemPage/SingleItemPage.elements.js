import styled, { keyframes } from "styled-components";

const addItemToastAnim = keyframes`
  0% {
    opacity: 0;
    bottom: -2rem;
    left :0;
  }

  8% {
    opacity: .9;
    bottom: -3.25rem;
  }

  10% {
    opacity: 1;
    bottom: -3rem;
  }

  90% {
    opacity: 1;
    left: 0;
    bottom: -3rem;
  }

  100% {
    left: 2rem;
    bottom: -3rem;
    opacity: 0;
  }
  
`;

export const Container = styled.div`
  .header-bkg {
    background: black;
    height: 5.5rem;
    margin-left: -100vw;
    margin-right: -100vw;
    margin-top: -5.5rem;
  }
  @media (max-width: 800px) {
    .header-bkg {
      height: 5.625rem;
    }
  }
  @media (max-width: 340px) {
    margin-top: 3.75rem;
  }
`;
export const GoBack = styled.div`
  margin-top: 5rem;
  color: #7d7d7d;
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 4rem;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 725px) {
    margin-top: 1.5rem;
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 725px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    .product-details-wrapper {
      width: 95%;
    }
  }
`;
export const ProductImg = styled.img`
  height: auto;
  width: 50%;
  max-width: 540px;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 725px) {
    width: 100%;
    margin-right: auto;
  }
`;
export const ProductDetails = styled.div`
  padding-left: 5.5rem;
  max-width: 80ch;
  h2 {
    margin-top: 0;
  }
  p:last-of-type {
    margin-bottom: 0%;
  }

  @media (max-width: 1100px) {
    padding-left: 4.5rem;
  }
  @media (max-width: 725px) {
    padding-left: 0;
    margin-top: 3rem;
  }

  @media (max-width: 375px) {
    .item-name {
      font-size: 1.75rem;
    }
  }
`;
export const Secondary = styled.div`
  display: flex;
  margin-top: 5.5rem;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const Features = styled.div`
  flex: 7;
  padding-right: 8.5rem;
  .item-features {
    white-space: pre-wrap;
  }
  @media (max-width: 1100px) {
    padding-right: 0;
  }
`;
export const IncludedItems = styled.div`
  flex: 3;
  ul {
    list-style-type: none;
    padding: 0;
    .included-item {
      margin-bottom: 0.75rem;
      &__count {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
        min-width: 1.5rem;
        padding-right: 1rem;
        display: inline-block;
      }
    }
  }
  @media (max-width: 1100px) {
    display: flex;
    width: 100%;
    max-width: 34.5rem;
    justify-content: space-between;
    margin-top: 7.5rem;
    h3,
    ul {
      margin-top: 0;
    }
  }
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
export const Quantity = styled.div`
  display: flex;
  margin-top: 3rem;

  .add-to-cart {
    position: relative;
    &__toast {
      position: absolute;
      text-align: center;
      color: white;
      padding: 0.5rem;
      background-color: ${props => props.theme.colors.green};
      border-radius: 0.5rem;
      animation: ${addItemToastAnim} 5s ease-in-out forwards;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    .add-to-cart {
      width: auto;
      margin-top: 2rem;
      &__btn {
        width: 100%;
      }
    }
  }
`;
export const Counter = styled.div`
  display: flex;
  height: 3rem;
  margin-right: 1rem;
  > * {
    background: ${props => props.theme.colors.white500};
    line-height: 3rem;
  }
  button {
    color: #c4c4c4;
    width: auto;
    padding: 0 1.25rem;
    &:hover {
      background-color: ${props => props.theme.colors.white500};
      color: ${props => props.theme.colors.primary};
      transition: 0.25s;
    }
  }
  .amount {
    font-size: 0.8125rem;
    font-weight: bold;
    min-width: 1.5rem;
    text-align: center;
    &:hover {
      cursor: default;
      user-select: none;
    }
  }

  @media (max-width: 375px) {
    margin-right: 0;
    width: 100%;
  }
`;
