import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 3.25rem;
  background: white;

  h3 {
    margin: 0;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }

  @media (max-width: 370px) {
    padding: 0;
    background: transparent;
  }

  /* @media (max-width: 320px) {
    padding: 1rem 0;
    background: #f1f1f1;
  } */
`;

export const FormSection = styled.div`
  margin-bottom: 2.5rem;

  .section-label {
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.93px;
  }

  .fields,
  .e-money-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;
  }

  @media (max-width: 665px) {
    .fields,
    .e-money-form {
      grid-template-columns: 1fr;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    .field-header {
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form-label {
        font-size: 0.75rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      .form-error {
        font-size: 0.75rem;
        color: red;
      }
    }
  }
  input {
    flex: 1;
    box-sizing: inherit;
    font-size: 0.875rem;
    font-weight: bold;
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid #cfcfcf;
    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  .payment-methods {
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;

    button {
      width: 100%;
      height: 3.5rem;
      background-color: transparent;
      color: black;
      text-align: left;
      border: 1px solid #cfcfcf;
      border-radius: 0.5rem;
      text-transform: none;
      letter-spacing: -0.25px;
      padding: 1rem;
      display: flex;
      align-items: center;

      &:first-of-type {
        margin-bottom: 1rem;
      }
      &:hover {
        border: 1px solid ${props => props.theme.colors.primary};
      }
      &.selected {
        border: 1px solid ${props => props.theme.colors.primary};
        .radio-circle::after {
          height: 10px;
          width: 10px;
          border-radius: 10px;
          background: ${props => props.theme.colors.primary};
          position: absolute;
          content: " ";
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .radio-circle {
        position: relative;
        height: 20px;
        width: 20px;
        border: 1px solid #cfcfcf;
        border-radius: 20px;
        margin-right: 1rem;
      }
    }
  }

  ${props => {
    if (props.fullwidth) {
      return css`
        grid-column: 1 / -1;
      `;
    }

    if (props.paymentDetails) {
      return css`
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: 665px) {
          grid-template-columns: 1fr;

          .payment-methods {
            padding-left: 0;
          }
        }
      `;
    }
  }}
`;
