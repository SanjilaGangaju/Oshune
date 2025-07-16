import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const removeCartProd = (event, id)=>{
  const cartCard = document.querySelector(`#card${id}`);
  if (cartCard) cartCard.remove();

  //remove from local storage
  let cartProducts = getCartProductFromLS();
  cartProducts = cartProducts.filter(prod => prod.id !== id);
  
  localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

  updateCartValue(cartProducts);
}