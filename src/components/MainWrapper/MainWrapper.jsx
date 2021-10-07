import React from "react";
import { Wrapper } from "../shared/Wrapper.elements";

import { Route, useLocation, Switch } from "react-router-dom";

import Home from "../Home/Home";
import CategoryPage from "../CategoryPage/CategoryPage";

import SingleItemPage from "../SingleItemPage/SingleItemPage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import NotFound from "../NotFound/NotFound";

export default function MainWrapper() {
  const location = useLocation();

  // background color on wrapper is different for checkout route
  const checkoutStyles = {
    backgroundColor: "#F1F1F1"
  };

  return (
    <Wrapper style={location.pathname === "/checkout" ? checkoutStyles : {}}>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={["/headphones", "/speakers", "/earphones"]}>
            <CategoryPage />
          </Route>
          <Route path="/item/:itemId">
            <SingleItemPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Wrapper>
  );
}
