import React, { useState } from "react";
import { Container, Image1, Image2, ImageMain } from "./Gallery.elements";

const baseUrl = "https://audiophile-backend.herokuapp.com";

/*

This is a child component of SingleItemPage displaying a gallery of images
depicting its respective item

Each image passed into the component has a hash containing 1, 2, or 3
between underscores. splitting the string on the underscores will get the
required # on index 2
e.g. image_gallery_3_desktop_ee301e85bd

the ones with 1 or 2 are smaller and are on the side
the one with the 3 is a larger image that will take up most of the space

---------------------------------------------
|           |                               |
|           |                               |
|     1     |                               |
|           |                               |
-------------              3                |
|           |                               |
|           |                               |
|     2     |                               |
|           |                               |
---------------------------------------------

*/

export default function Gallery(props) {
  const images = props.images.reduce(
    (acc, curr) => {
      const imgNum = curr.hash.split("_")[2];
      const imgSize = curr.hash.split("_")[3];

      if (imgNum == 1) {
        if (imgSize === "mobile") {
          acc.img1.mobileUrl = curr.url;
        } else if (imgSize === "tablet") {
          acc.img1.tabletUrl = curr.url;
        } else {
          acc.img1.desktopUrl = curr.url;
        }
      }

      if (imgNum == 2) {
        if (imgSize === "mobile") {
          acc.img2.mobileUrl = curr.url;
        } else if (imgSize === "tablet") {
          acc.img2.tabletUrl = curr.url;
        } else {
          acc.img2.desktopUrl = curr.url;
        }
      }

      if (imgNum == 3) {
        if (imgSize === "mobile") {
          acc.imgMain.mobileUrl = curr.url;
        } else if (imgSize === "tablet") {
          acc.imgMain.tabletUrl = curr.url;
        } else {
          acc.imgMain.desktopUrl = curr.url;
        }
      }

      return acc;
    },
    {
      img1: {},
      img2: {},
      imgMain: {}
    }
  );

  return (
    <Container>
      <div className="side-images">
        <div className="side-image-wrapper">
          <Image1
            className="image-1 side-images__img gallery-img"
            desktopImg={`${baseUrl}${images.img1.desktopUrl}`}
            tabletImg={`${baseUrl}${images.img1.tabletUrl}`}
            mobileImg={`${baseUrl}${images.img1.mobileUrl}`}
          ></Image1>
        </div>
        <div className="side-image-wrapper">
          <Image2
            className="image-2 side-images__img gallery-img"
            desktopImg={`${baseUrl}${images.img2.desktopUrl}`}
            tabletImg={`${baseUrl}${images.img2.tabletUrl}`}
            mobileImg={`${baseUrl}${images.img2.mobileUrl}`}
          ></Image2>
        </div>
      </div>
      <div className="main-image-wrapper">
        <ImageMain
          className="gallery-img"
          desktopImg={`${baseUrl}${images.imgMain.desktopUrl}`}
          tabletImg={`${baseUrl}${images.imgMain.tabletUrl}`}
          mobileImg={`${baseUrl}${images.imgMain.mobileUrl}`}
        ></ImageMain>
      </div>
    </Container>
  );
}
