import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useCart, useCartUpdate } from "../../CartContext";
import useScreenWidth from "../../hooks/useScreenWidth";
import {
  Container,
  GoBack,
  Main,
  ProductImg,
  ProductDetails,
  Secondary,
  Features,
  IncludedItems,
  Quantity,
  Counter
} from "./SingleItemPage.elements";

import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import BestGear from "../BestGear/BestGear";

import apiService from "../../apiService";

import parseImgFileName from "../../imgFileNameParser";

import Gallery from "../Gallery/Gallery";
import Skeleton from "react-loading-skeleton";
import SuggestedItems from "../SuggestedItems/SuggestedItems";

const baseUrl = "https://audiophile-backend.herokuapp.com";

const defaultItemState = {
  name: null,
  category: null,
  id: null,
  image: [],
  features: "",
  included_items: {
    items: []
  },
  gallery: []
};

export default function SingleItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(defaultItemState);

  const [mobileImgUrl, setMobileImgUrl] = useState(null);
  const [tabletImgUrl, setTabletImgUrl] = useState(null);
  const [desktopImgUrl, setDesktopImgUrl] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [addingItem, setAddingItem] = useState(false);

  const match = useRouteMatch("/item/:itemId");
  const history = useHistory();

  const cartItems = useCart();
  const updateCart = useCartUpdate();
  const width = useScreenWidth();

  const goBack = () => {
    history.push(`/${item.category.name}`);
  };

  useEffect(() => {
    // Fetch product info on page render
    const fetchItem = async () => {
      setLoading(true);
      setItem(defaultItemState);
      const item = await apiService.getItemById(match.params.itemId);
      setItem(item);
      setLoading(false);
    };

    fetchItem();
  }, [window.location.href]);

  const delay = ms => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), ms);
    });
  };

  const addToCart = async () => {
    if (addingItem) return; // debounce

    // Get relevant details of the item for cart addition
    const { id, name, price, image } = item;
    const itemToBeAdded = { id, name, price, image: image[2], quantity };

    itemToBeAdded.name = name.substring(0, name.lastIndexOf(" "));

    // Update context, sync with local storage
    updateCart([...cartItems, itemToBeAdded]);

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([itemToBeAdded]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cartItems, itemToBeAdded])
      );
    }

    setAddingItem(true);
    setQuantity(1);
    await delay(5000);
    setAddingItem(false);
  };

  useEffect(() => {
    if (item !== null) {
      const itemImages = item.image;
      const { mobileImgUrl, tabletImgUrl, desktopImgUrl } = parseImgFileName(
        itemImages
      );
      setMobileImgUrl(mobileImgUrl);
      setTabletImgUrl(tabletImgUrl);
      setDesktopImgUrl(desktopImgUrl);
    }
  }, [item]);

  return (
    <Container>
      <div className="header-bkg"></div>
      <GoBack onClick={goBack}>Go Back</GoBack>
      <Main>
        <ProductImg
          src={(() => {
            if (width > 1100) {
              return `${baseUrl}${desktopImgUrl}`;
            } else if (width > 725) {
              return `${baseUrl}${tabletImgUrl}`;
            } else {
              return `${baseUrl}${mobileImgUrl}`;
            }
          })()}
          alt={item.name}
        />
        <div className="product-details-wrapper">
          <ProductDetails>
            <h2 className="item-name">{item.name || <Skeleton />}</h2>
            <p>{item.description || <Skeleton count={3} />}</p>
            <p>
              <strong>${item.price || <Skeleton width={100} />}</strong>
            </p>
            <Quantity>
              <Counter>
                <button
                  onClick={() =>
                    setQuantity(prevState => {
                      if (prevState <= 1) {
                        return 1;
                      }
                      return prevState - 1;
                    })
                  }
                >
                  -
                </button>
                <div className="amount">{quantity}</div>
                <button onClick={() => setQuantity(prevState => prevState + 1)}>
                  +
                </button>
              </Counter>
              <div className="add-to-cart">
                <button
                  className="add-to-cart__btn"
                  onClick={() => addToCart()}
                >
                  Add to cart
                </button>
                {addingItem && (
                  <div className="add-to-cart__toast">Item added!</div>
                )}
              </div>
            </Quantity>
          </ProductDetails>
        </div>
      </Main>
      <Secondary>
        <Features>
          <h3>Features</h3>
          <div className="item-features">
            {item.features || <Skeleton count={10} />}
          </div>
        </Features>
        <IncludedItems>
          <h3>In the box</h3>
          <ul>
            {item.included_items.items.map((item, index) => {
              return (
                <li className="included-item" key={index}>
                  <span className="included-item__count">{item.count}x </span>
                  <span className="included-item__name">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </IncludedItems>
      </Secondary>
      <Gallery images={item.gallery} />
      {loading === false && (
        <SuggestedItems category={item.category} itemId={item.id} />
      )}
      <CategoryNavigation />
      <BestGear />
    </Container>
  );
}
