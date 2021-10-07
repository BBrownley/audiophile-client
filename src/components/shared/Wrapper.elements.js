import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fafafa;
  > div {
    max-width: 100rem;
    padding: 0 2rem;
    margin: 0 auto;

    @media (max-width: 300px) {
      padding: 0 1rem;
    }
  }
`;
