import styled, { css } from "styled-components";

import logo from "../../assets/shared/desktop/logo.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";

export const Container = styled.div`
  margin: 0 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  > * {
    z-index: 10000;
  }

  .close-menu {
    position: absolute;
    left: -2.5rem;
    right: -2.5rem;
    top: 0;
    bottom: 0;
    height: 300rem;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
    display: none;
    &.closed {
      display: none;
    }
    @media (max-width: 800px) {
      display: block;
    }
  }

  .cart {
    position: relative;
    &__count {
      position: absolute;
      color: black;
      background: white;
      border-radius: 2rem;
      text-align: center;
      right: -1rem;
      top: -1rem;
      user-select: none;
      pointer-events: none;
      min-width: 1.375rem;
      font-weight: bold;
    }
  }

  .wrapper {
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin: 0 auto;
    max-width: 1600px;
    @media (max-width: 800px) {
      padding: 2rem 0rem;
    }

    @media (max-width: 400px) {
      padding: 1.5rem;
    }
    @media (max-width: 340px) {
      background: black;
    }
    @media (max-width: 305px) {
      padding: 1rem 0.5rem;
    }
  }
  @media (max-width: 650px) {
    margin: 0;
    .wrapper {
      padding: 2rem 2.25rem;
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  z-index: 10000;
`;

export const HamburgerIcon = styled.div`
  background: url(${hamburger});
  height: 15px;
  width: 16px;
  margin-right: 2.5rem;
  display: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: inline-block;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 340px) {
    margin-top: 4rem;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  ${props =>
    !props.open &&
    css`
      display: none;
    `}

  position: absolute;
  background: white;
  z-index: 10;
  left: -2.5rem;
  right: -2.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-top: 1.5rem;
  z-index: 10;
  display: none;

  .mobile-menu-nav {
    margin: 0;
    margin-top: 3rem;

    .wrapper {
      border-bottom: none;
      padding: 0 2rem 2rem 2rem;
      background: white;
      .category-nav__item {
        &__img {
          background-size: 70%;
          background-repeat: no-repeat;
          background-position: center;
          bottom: 3.5rem;
        }
      }
    }
  }

  @media (max-width: 800px) {
    display: ${props => (props.open ? "block" : "none")};
  }

  @media (max-width: 660px) {
    padding: 2rem;
    padding-bottom: 0;
    .mobile-menu-nav {
      height: 700px;

      .wrapper {
        .category-nav__item {
          &__img {
            background-size: 100%;
            bottom: 4rem;
          }
        }
      }
    }
  }
`;
