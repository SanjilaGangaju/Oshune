const cartValue = document.querySelector('#cart-count');
export const updateCartValue=(cartProducts)=>{
   cartValue.textContent= cartProducts.length;
}