import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;
`;

export const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33.75rem;
  padding: 3rem;
  background: white;
  border-radius: 0.5rem;

  a button {
    width: 100%;
    margin-top: 3rem;
  }

  @media (max-width: 670px) {
    width: 80vw;
  }

  @media (max-height: 910px) {
    top: 0;
    bottom: 0;
    transform: translate(-50%, 0);
    overflow-y: scroll;
    border-radius: none;
    text-align: center;
  }
`;

export const Summary = styled.div`
  display: flex;
  text-align: left;

  > * {
    padding: 2rem;
  }

  .items {
    background: #f1f1f1;
    flex: 7;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    max-height: 25rem;
    overflow-y: scroll;
  }

  .view-less-more {
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  .grand-total {
    background: black;
    flex: 3;
    color: white;
    text-transform: uppercase;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    p {
      margin: 0;
      &:first-of-type {
        margin-bottom: 0.5rem;
        color: #808080;
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: 2rem;
    .items {
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .grand-total {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }
`;
