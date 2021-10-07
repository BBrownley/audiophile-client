import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-top: 5rem;
`;
export const HeaderBkg = styled.div`
  height: 5.5rem;
  background: black;
  position: absolute;
  top: -5.5rem;
  left: -100vw;
  right: -100vw;
`;

export const GoBack = styled.span`
  color: #808080;
  font-size: 0.9375rem;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
  margin-top: 3rem;
  padding-bottom: 7.5rem;
  > * {
    min-height: 3rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 1200px) {
    display: block;
    > * {
      &:first-of-type {
        margin-bottom: 2rem;
      }
    }
  }
`;
