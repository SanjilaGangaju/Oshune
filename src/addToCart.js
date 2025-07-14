import { getCartProductFromLS } from "./getCartProducts";

export const addToCart =(event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity =currentProdElem.querySelector('.quantity').innerText;
    let price= currentProdElem.querySelector(".product-price").innerText;
    
    price =Number(price.replace('₹', ""));
    quantity= Number(quantity);

    price = Number(price*quantity);
    


    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));
    console.log("After adding:", JSON.parse(localStorage.getItem("cartProductsLS")));

};