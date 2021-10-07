export const sumGrandTotal = (cart, shippingCost = 50) => {
  const itemAndVAT_total = Math.round(
    cart.reduce((acc, item) => {
      return acc + item.quantity * item.price * 1.2;
    }, 0)
  );

  const grandTotal = itemAndVAT_total + shippingCost;
  return grandTotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
