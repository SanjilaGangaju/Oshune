const cartbutton = document.querySelector("#cart-value");   
export const updateCartValue = (cartProducts) => {
            cartbutton.innerHTML = `<i class="fa-solid fa-bag-shopping">${cartProducts.length}</i>`;

}