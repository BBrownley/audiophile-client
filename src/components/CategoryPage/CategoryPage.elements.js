import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

export const Container = styled.div`
  min-height: 100vh;

  @media (max-width: 340px) {
    margin-top: 4rem;
  }
`;

export const CategoryHeader = styled.div`
  background: black;
  color: white;
  margin-left: -100vw;
  margin-right: -100vw;
  margin-top: -5.75rem;
  margin-bottom: 10rem;
  height: 21rem;
  text-align: center;
  position: relative;
  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 1.5rem;
  }

  @media (max-width: 350px) {
    height: 13rem;
    h2 {
      font-size: 1.75rem;
      padding-top: 2.5rem;
    }
  }
`;

export const StyledLoader = styled(ScaleLoader)`
  text-align: center;
  height: 10rem;
  margin-top: 0rem;
  transform: scale(3);
  padding-top: 3rem;
`;
