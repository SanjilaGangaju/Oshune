import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (event, id, stock)=>{
    let arrLocalStorageProduct = getCartProductFromLS();
    
    const currCardElement = document.querySelector(`#card${id}`);
    let price= currCardElement.querySelector('.productPrice').innerText.replace("रु", "");
    
    let quantity = currCardElement.querySelector(".productQuantity").innerText;
    price = Number(price * quantity);
    quantity = Number(quantity);
    let updatecart = {id, quantity, price};
    arrLocalStorageProduct.push(updatecart);
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));
};