import React, { useState } from "react";

import { Container, FormSection, Field } from "./CheckoutForm.elements";

export default function CheckoutForm({
  register,
  errors,
  handleSubmit,
  onSubmit
}) {
  const [paymentMethod, setPaymentMethod] = useState("e-money");

  return (
    <Container>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit(onSubmit)} id="checkout-form">
        <FormSection>
          <p className="section-label">Billing details</p>
          <div className="fields">
            <Field>
              <label htmlFor="name">
                <div className="field-header">
                  <p className="form-label">Name</p>
                  {errors.name && errors.name.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input name="name" {...register("name", { required: true })} />
            </Field>
            <Field>
              <label htmlFor="email">
                <div className="field-header">
                  <p className="form-label">Email Address</p>
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="form-error">Invalid format</p>
                  )}
                  {errors.email && errors.email.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input
                name="email"
                {...register("email", {
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  required: true
                })}
              />
            </Field>
            <Field>
              <label htmlFor="phoneNumber">
                <div className="field-header">
                  <p className="form-label">Phone Number</p>
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "pattern" && (
                      <p className="form-error">Invalid format.</p>
                    )}
                  {errors.phoneNumber &&
                    errors.phoneNumber.type === "required" && (
                      <p className="form-error">This is required</p>
                    )}
                </div>
              </label>
              <input
                name="phoneNumber"
                {...register("phoneNumber", {
                  pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  required: true
                })}
              />
            </Field>
          </div>
        </FormSection>
        <FormSection>
          <p className="section-label">Shipping info</p>
          <div className="fields">
            <Field fullwidth>
              <label htmlFor="address">
                <div className="field-header">
                  <p className="form-label">Address</p>
                  {errors.address && errors.address.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input
                name="address"
                {...register("address", { required: true })}
              />
            </Field>
            <Field>
              <label htmlFor="zipcode">
                <div className="field-header">
                  <p className="form-label">ZIP code</p>

                  {errors.zipcode && errors.zipcode.type === "pattern" && (
                    <p className="form-error">Invalid format</p>
                  )}
                  {errors.zipcode && errors.zipcode.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input
                name="zipcode"
                {...register("zipcode", {
                  pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
                  required: true
                })}
              />
            </Field>
            <Field>
              <label htmlFor="city">
                <div className="field-header">
                  <p className="form-label">City</p>
                  {errors.city && errors.city.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input name="city" {...register("city", { required: true })} />
            </Field>
            <Field>
              <label htmlFor="country">
                <div className="field-header">
                  <p className="form-label">Country</p>
                  {errors.country && errors.country.type === "required" && (
                    <p className="form-error">This is required</p>
                  )}
                </div>
              </label>
              <input
                name="country"
                {...register("country", { required: true })}
              />
            </Field>
          </div>
        </FormSection>
        <FormSection>
          <p className="section-label">Payment details</p>

          <Field paymentDetails>
            <label htmlFor="paymentMethod">
              <div className="field-header">
                <p className="form-label">Payment method</p>
              </div>
            </label>
            <div className="payment-methods">
              <button
                className={paymentMethod === "e-money" ? "selected" : ""}
                onClick={() => setPaymentMethod("e-money")}
              >
                <div className="radio-circle"></div>
                <span>e-Money</span>
              </button>
              <button
                className={paymentMethod === "cash" ? "selected" : ""}
                onClick={() => setPaymentMethod("cash")}
              >
                <div className="radio-circle"></div>
                <span>Cash on Delivery</span>
              </button>
            </div>
          </Field>

          {paymentMethod === "e-money" && (
            <div className="e-money-form">
              <Field>
                <label htmlFor="eMoneyNumber">
                  <div className="field-header">
                    <p className="form-label">e-Money Number</p>
                    {errors.eMoneyNumber &&
                      errors.eMoneyNumber.type === "required" && (
                        <p className="form-error">This is required</p>
                      )}
                  </div>
                </label>
                <input
                  name="eMoneyNumber"
                  {...register("eMoneyNumber", {
                    required: paymentMethod === "e-money"
                  })}
                />
              </Field>
              <Field>
                <label htmlFor="eMoneyPin">
                  <div className="field-header">
                    <p className="form-label">e-Money PIN</p>
                    {errors.eMoneyPin &&
                      errors.eMoneyPin.type === "required" && (
                        <p className="form-error">This is required</p>
                      )}
                  </div>
                </label>
                <input
                  name="eMoneyPin"
                  {...register("eMoneyPin", {
                    required: paymentMethod === "e-money"
                  })}
                />
              </Field>
            </div>
          )}
        </FormSection>
      </form>
    </Container>
  );
}
