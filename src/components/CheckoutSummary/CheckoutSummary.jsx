import React, { useState } from "react";
import { useCart } from "../../CartContext";

import { Container, ItemList, Item } from "./CheckoutSummary.elements";

export default function CheckoutSummary({ submitForm }) {
  const cartItems = useCart();
  const shippingCost = 50;

  const sumItemTotal = cart => {
    return cart
      .reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const sumVAT = cart => {
    return Math.round(
      cart.reduce((acc, item) => {
        return acc + item.quantity * item.price * 0.2;
      }, 0)
    )
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const sumGrandTotal = cart => {
    const itemAndVAT_total = Math.round(
      cart.reduce((acc, item) => {
        return acc + item.quantity * item.price * 1.2;
      }, 0)
    );

    const grandTotal = itemAndVAT_total + shippingCost;
    return grandTotal
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container>
      <h6>Summary</h6>
      <ItemList>
        {cartItems.map((cartItem, index) => {
          return (
            <Item key={index}>
              <div className="item-detail-primary">
                <img
                  src={`${cartItem.image.url}`}
                  alt={`${cartItem.name}`}
                />
                <div>
                  <p className="item-detail-primary__name">{cartItem.name}</p>
                  <p className="item-detail-primary__price">
                    $ {cartItem.price}
                  </p>
                </div>
              </div>
              <div className="item-quantity">
                <span>x{cartItem.quantity}</span>
              </div>
            </Item>
          );
        })}
      </ItemList>
      <p className="order-detail">
        <span>Total</span>
        <span>$ {sumItemTotal(cartItems)}</span>
      </p>
      <p className="order-detail">
        <span>Shipping</span>
        <span>$ {shippingCost}</span>
      </p>
      <p className="order-detail">
        <span>VAT (Included)</span>
        <span>$ {sumVAT(cartItems)}</span>
      </p>
      <p className="order-detail">
        <span>Grand total</span>
        <span>$ {sumGrandTotal(cartItems)}</span>
      </p>

      <input
        type="submit"
        form="checkout-form"
        value={`Continue & pay`}
        id="checkout-form-submit"
      />
    </Container>
  );
}
