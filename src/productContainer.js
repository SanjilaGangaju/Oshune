import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelectorAll('.product-container');
console.log(productContainer);
const productTemplate = document.querySelector('#product-template');
const bestSelling = document.querySelector('.best-selling--products');
export const showProductContainer=(products)=>{
    if (!Array.isArray(products) || products.length==0){
        console.log('No products to show....');
        
    }
    products.forEach((currProd) => {
        const {id , name, category, description, price, stock, image} = currProd;

         productContainer.forEach((container)=>{

                   const productClone= productTemplate.content.cloneNode(true);
                   productClone.querySelector('#card-value').setAttribute('id', `card${id}`);
                   productClone.querySelector('.product-name').textContent = name;
                   productClone.querySelector('.product-card--subheading').textContent= `${stock} remaining in stock`;
                   productClone.querySelector('.description').textContent= description;
                   productClone.querySelector('.product-image').src= image;
                   productClone.querySelector('.product-price').textContent= `₹ ${price}`;
                   productClone.querySelector('.product-actual-price').textContent= `/ ${price + 30}`;
                   productClone.querySelector(".product-quantity--stock").addEventListener('click', (event)=>{
                         homeQuantityToggle(event, id , stock);
                   });
                   productClone.querySelector('.product-cart--button').addEventListener('click', (event)=>{
                        addToCart(event, id , stock);
                
                   });
                  container.append(productClone);

        });
      
       
        
        

    });
    


}