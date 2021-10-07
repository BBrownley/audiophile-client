import styled from "styled-components";

export const Container = styled.div`
  margin: 8rem auto -10rem auto;
  text-align: center;
  max-width: 1110px;

  @media (max-width: 750px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 660px) {
    margin-bottom: 10rem;
  }
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;

  > * {
    margin: 0 1rem;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    > * {
      margin: 0;
      margin-bottom: 3rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: auto;
    max-width: 350px;
    height: 400px;
    border-radius: 0.5rem;
  }

  @media (max-width: 1200px) {
    img {
      height: 300px;
    }
  }

  @media (max-width: 1020px) {
    img {
      height: 215px;
    }
  }

  @media (max-width: 750px) {
    display: block;

    img {
      height: 300px;
    }
  }

  @media (max-width: 375px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
