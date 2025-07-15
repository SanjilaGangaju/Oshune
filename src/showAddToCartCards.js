import { getCartProductFromLS } from "./getCartProducts";
import products from "../api/products.json";
import { removeCartProd } from "./removeCartProduct";
const cartProdsTemplate = document.querySelector(".cart-products--template");
const cartProdsContainer = document.querySelector(".cart-products--container"); 
 let cartProds = getCartProductFromLS();
export const showCartProducts = (cartProds, products)=>{
   
    console.log(cartProds);
    if (cartProds.length===0){
        cartProdsContainer.innerHTML = `<h2 class="empty-cart">Your Cart is Empty</h2>`;
    }
    cartProds.forEach((cartProd)=>{
        const {id, price, quantity} = cartProd;
        const cartProdClone = cartProdsTemplate.content.cloneNode(true);
        cartProdClone.querySelector('.cart-product--item').setAttribute("id", `card${id}`)
        const product = products.find((prod)=> prod.id == id);
        if (product) {
            cartProdClone.querySelector('.cart-product--img').src = product.image;
            cartProdClone.querySelector('.cart-product--title').textContent = product.name;
        }
        cartProdClone.querySelector('.cart-product--price').textContent= `₹ ${price}`;
        cartProdClone.querySelector('.quantity-value').textContent= `${quantity}`;
        
        cartProdClone.querySelector('.remove-btn').addEventListener('click', (event)=>{removeCartProd(event, id)});
        cartProdsContainer.append(cartProdClone);
       
    })

}
showCartProducts(cartProds, products);