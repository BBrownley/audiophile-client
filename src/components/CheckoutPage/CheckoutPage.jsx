import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useCart } from "../../CartContext";

import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

import {
  Container,
  HeaderBkg,
  GoBack,
  Main,
  PaymentInfo,
  Summary
} from "./CheckoutPage.elements";

export default function CheckoutPage() {
  const cartItems = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const history = useHistory();

  const onSubmit = data => {
    setCheckoutComplete(true);
  };

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      history.goBack();
    }
  }, []);

  return (
    <Container>
      <HeaderBkg />
      <GoBack onClick={() => history.goBack()}>Go Back</GoBack>
      <Main>
        <CheckoutForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <CheckoutSummary submitForm={onSubmit} />
      </Main>
      {checkoutComplete && (
        <CheckoutModal setCheckoutComplete={setCheckoutComplete} />
      )}
    </Container>
  );
}
