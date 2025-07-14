import { updateCartValue } from "./assests/updateCartValue";
import { getCartProductFromLS } from "./getCartProducts";

export const addToCart =(event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity =currentProdElem.querySelector('.quantity').innerText;
    let price= currentProdElem.querySelector(".product-price").innerText;
    
    price = price.replace('₹', "");
    price = Number(price*quantity);
    quantity= Number(quantity);


    // let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);
};