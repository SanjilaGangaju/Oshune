
import { cartPrice } from "./cartPrice";
import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart =(event, id, stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity =currentProdElem.querySelector('.quantity').innerText;
    let price= currentProdElem.querySelector(".product-price").innerText;
    
    price =Number(price.replace('₹', ""));
    
    let existingProduct= arrLocalStorageProduct.find((curProd)=>{
        
        return curProd.id == id;

    });
    
    if (existingProduct && quantity >= 1){
        quantity = Number(existingProduct.quantity) + Number(quantity);
    
        price = Number(price * quantity);
        let updatedCart = { id , quantity, price};
        updatedCart = arrLocalStorageProduct.map((curProd)=>{
            return (curProd.id == id) ? updatedCart : curProd;

            });
          localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
           showToast("add", id);
        

    }
    if (existingProduct){
        return false
    }
    quantity= Number(quantity);
    
    price = Number(price*quantity);

    
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));
    
    cartPrice();
    updateCartValue(arrLocalStorageProduct);
     showToast("add", id);
   
    

};