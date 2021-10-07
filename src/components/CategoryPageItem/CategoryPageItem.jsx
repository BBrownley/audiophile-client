import React from "react";
import { Link } from "react-router-dom";

import parseImgFileName from "../../imgFileNameParser";

import {
  Container,
  ImageWrapper,
  ItemImage,
  ItemDetails
} from "./CategoryPageItem.elements";

export default function CategoryPageItem({ item, index }) {
  const itemImages = item.image;

  let { mobileImgUrl, tabletImgUrl, desktopImgUrl } = parseImgFileName(
    itemImages
  );

  return (
    <Container index={index}>
      <ImageWrapper>
        <ItemImage
          mobileImgUrl={mobileImgUrl}
          tabletImgUrl={tabletImgUrl}
          desktopImgUrl={desktopImgUrl}
        ></ItemImage>
      </ImageWrapper>

      <ItemDetails index={index}>
        <div className="details-wrapper">
          {index === 0 && <p className="new-product">NEW PRODUCT</p>}
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <Link to={`/item/${item.id}`}>
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </ItemDetails>
    </Container>
  );
}
