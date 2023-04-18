import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart, useCartUpdate } from "../../CartContext";
import { sumGrandTotal } from "../../helpers/sumGrandTotal";
import check from "../../assets/checkmark.png";

import { Container, Main, Summary } from "./CheckoutModal.elements";
import { Item } from "../CheckoutSummary/CheckoutSummary.elements";

import apiService from "../../apiService";

export default function CheckoutModal({
  formData,
  items,
  setCheckoutComplete
}) {
  const [showMore, setShowMore] = useState(true);

  const cartItems = useCart();
  const updateCart = useCartUpdate();

  const grandTotal = sumGrandTotal(cartItems);

  const handleCompleteCheckout = () => {
    setCheckoutComplete(false);
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <Container>
      <Main>
        <img src={check} alt="checkmark" />
        <h3>
          Thank you <br></br> for your order
        </h3>
        <p>You will receive an email confirmation shortly.</p>
        <Summary>
          <div className="items">
            {showMore &&
              cartItems.map(cartItem => {
                return (
                  <Item>
                    <div className="item-detail-primary">
                      <img
                        src={`${apiService.baseUrl}${cartItem.image.url}`}
                        alt={`${cartItem.name}`}
                      />
                      <div>
                        <p className="item-detail-primary__name">
                          {cartItem.name}
                        </p>
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
            {showMore && (
              <div
                className="view-less-more"
                onClick={() => setShowMore(false)}
              >
                View less
              </div>
            )}
            {!showMore && (
              <Item>
                <div className="item-detail-primary">
                  <img
                    src={`${apiService.baseUrl}${cartItems[0].image.url}`}
                    alt={`${cartItems[0].name}`}
                  />
                  <div>
                    <p className="item-detail-primary__name">
                      {cartItems[0].name}
                    </p>
                    <p className="item-detail-primary__price">
                      $ {cartItems[0].price}
                    </p>
                  </div>
                </div>
                <div className="item-quantity">
                  <span>x{cartItems[0].quantity}</span>
                </div>
              </Item>
            )}
            {!showMore && (
              <div className="view-less-more" onClick={() => setShowMore(true)}>
                and {cartItems.length - 1} other item(s)
              </div>
            )}
          </div>
          <div className="grand-total">
            <p>Grand total</p>
            <p>$ {grandTotal}</p>
          </div>
        </Summary>
        <Link to="/">
          <button onClick={handleCompleteCheckout}>Back to home</button>
        </Link>
      </Main>
    </Container>
  );
}
