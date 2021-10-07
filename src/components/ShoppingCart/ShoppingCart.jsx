import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCart, useCartUpdate } from "../../CartContext";

import {
  Container,
  CartIcon,
  Background,
  Main,
  Item,
  StyledCartItemLink,
  StyledCheckoutBtn
} from "./ShoppingCart.elements";

export default function ShoppingCart({
  toggleCartOpen,
  cartOpen,
  handleClose
}) {
  const items = useCart();
  const updateCart = useCartUpdate();

  const removeItem = index => {
    const updatedItems = items.filter((item, i) => index !== i);

    updateCart(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeAllItems = () => {
    updateCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const adjustItemQuantity = (item, amount, cartIndex) => {
    if (item.quantity + amount <= 0) return; // quantity cannot be less than 1

    const updatedItem = { ...item, quantity: item.quantity + amount };

    const updatedItems = items.map((item, index) => {
      if (index === cartIndex) {
        return updatedItem;
      }
      return item;
    });

    updateCart(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const sumItemTotal = cart => {
    return cart
      .reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container>
      <CartIcon onClick={toggleCartOpen}> </CartIcon>
      <Background
        onClick={handleClose}
        className={cartOpen ? "fade-in-bkg" : ""}
      ></Background>

      <Main
        onClick={e => e.stopPropagation()}
        className={cartOpen ? "fade-in-main" : ""}
      >
        {items.length !== 0 && (
          <>
            <div className="cart-header">
              <h6>Cart ({items.length})</h6>
              <span className="remove-all" onClick={removeAllItems}>
                Remove all
              </span>
            </div>
            <div className="cart-items">
              {items.map((item, index) => {
                return (
                  <Item key={index}>
                    <div className="item-main">
                      <img src={`${item.image.url}`} />
                      <div>
                        <StyledCartItemLink
                          to={`/item/${item.id}`}
                          onClick={handleClose}
                        >
                          <p className="item-main__name">{item.name}</p>
                        </StyledCartItemLink>

                        <p className="item-main__price">$ {item.price}</p>
                      </div>
                    </div>
                    <div className="item-quantity">
                      <button
                        onClick={() => adjustItemQuantity(item, -1, index)}
                      >
                        -
                      </button>
                      <div className="item-quantity__quantity">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() => adjustItemQuantity(item, 1, index)}
                      >
                        +
                      </button>
                      <button
                        className="item-quantity__remove"
                        onClick={() => removeItem(index)}
                      >
                        x
                      </button>
                    </div>
                  </Item>
                );
              })}
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>
                <strong>${sumItemTotal(items)}</strong>
              </span>
            </div>
            <StyledCheckoutBtn to="/checkout" onClick={handleClose}>
              Checkout
            </StyledCheckoutBtn>
          </>
        )}
        {items.length === 0 && <p>Cart empty</p>}
      </Main>
    </Container>
  );
}
