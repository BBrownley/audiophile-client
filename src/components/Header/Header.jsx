import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../../CartContext";
import useScreenWidth from "../../hooks/useScreenWidth";
import NavLinks from "../NavLinks/NavLinks";
import ShoppingCartIcon from "../ShoppingCart/ShoppingCart";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

import Logo from "../shared/Logo";

import {
  Container,
  HeaderLeft,
  HamburgerIcon,
  MobileHeader,
  MobileMenu
} from "./Header.elements";

export default function Header() {
  const width = useScreenWidth();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useCart();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const toggleCartOpen = () => {
    setCartOpen(prevState => !prevState);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <Container>
      <div className="wrapper">
        {width > 400 && (
          <>
            <HeaderLeft>
              <HamburgerIcon onClick={toggleMobileMenu} />
              <Link to="/">
                <Logo className="navbar-logo" />
              </Link>
            </HeaderLeft>

            <NavLinks />
            <div className="cart">
              <ShoppingCartIcon
                toggleCartOpen={toggleCartOpen}
                cartOpen={cartOpen}
                handleClose={() => setCartOpen(false)}
              />
              {cart.length > 0 && (
                <span className="cart__count">{cart.length}</span>
              )}
            </div>
          </>
        )}

        {width <= 400 && (
          <MobileHeader>
            <HamburgerIcon onClick={toggleMobileMenu} />
            <Link to="/">
              <Logo className="navbar-logo" />
            </Link>
            <div className="cart">
              <ShoppingCartIcon
                toggleCartOpen={toggleCartOpen}
                cartOpen={cartOpen}
                handleClose={() => setCartOpen(false)}
              />{" "}
              <span className="cart__count">{cart.length}</span>
            </div>
          </MobileHeader>
        )}
      </div>

      <MobileMenu open={mobileMenuOpen}>
        <CategoryNavigation className="mobile-menu-nav" />
      </MobileMenu>
      <div
        className={`close-menu ${!mobileMenuOpen && "closed"}`}
        onClick={closeMobileMenu}
      ></div>
    </Container>
  );
}
