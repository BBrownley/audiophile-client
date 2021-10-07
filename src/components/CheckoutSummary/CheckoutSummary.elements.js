import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background: white;

  h6 {
    margin: 0;
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }

  #checkout-form-submit {
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    color: white;
    height: 3rem;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 1rem;
    &:hover {
      cursor: pointer;
      background-color: #fbaf85;
    }
  }

  .order-detail {
    display: flex;
    justify-content: space-between;
    margin-top: -0.5rem;

    span:first-of-type {
      color: #808080;
      text-transform: uppercase;
    }

    span:last-of-type {
      color: black;
      font-weight: bold;
    }

    &:last-of-type {
      margin-top: 1.5rem;

      span:last-of-type {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const ItemList = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p,
  span {
    margin: 0;
    font-weight: bold;
    color: #808080;
  }

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin-right: 1rem;
  }

  .item-detail-primary {
    display: flex;
    align-items: center;
    &__name {
      font-size: 0.9375rem;
      color: black;
    }
    &__price {
      font-size: 0.875rem;
    }
  }

  .item-quantity {
    margin-top: 0.375rem;
    span {
      font-size: 0.9375rem;
    }
  }
`;
