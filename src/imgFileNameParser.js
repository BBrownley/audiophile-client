const parseImgFileName = images => {
  let mobileImgUrl, tabletImgUrl, desktopImgUrl;
  images.forEach(image => {
    // Each image's name ends with either -mobile, -tablet, or -desktop
    // Search through the three images and assign the appropriate url

    // e.g. image-product-mobile.jpg
    const size = image.name
      .split(".")[0]
      .split("-")
      .pop(); // mobile, tablet, or desktop

    switch (size) {
      case "mobile":
        mobileImgUrl = image.url;
        break;
      case "tablet":
        tabletImgUrl = image.url;
        break;
      case "desktop":
        desktopImgUrl = image.url;
        break;
      default:
        console.error(
          "Unable to parse image file name, or image was not found"
        );
        break;
    }
  });

  return { mobileImgUrl, tabletImgUrl, desktopImgUrl };
};

export default parseImgFileName;
