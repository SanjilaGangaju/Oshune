const cartValue = document.querySelector('#cartValue');
export const updateCartValue=(cartProducts)=>{
   return cartValue.innerHTML = `<i class="fa-solid fa-bag-shopping"> ${cartProducts.length}</i>`
}