import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";

export const incrementDecrement=(event, id, stock, price)=>{
     const currProdCard = document.querySelector(`#card${id}`);
     const currProdPrice = currProdCard.querySelector('.cart-product--price');
     const quantityElem = currProdCard.querySelector('.quantity-value');
     
     let quantity=1;
     let localproductPrice = 0;
     let localCartProducts = getCartProductFromLS();
     let existingProd = localCartProducts.find((prod)=>{
          return prod.id == id});
      
     
     if (existingProd){
        quantity= existingProd.quantity;
        localproductPrice = existingProd.price;
     }
     else{
        localproductPrice =price;
        price=price;
     }

    if (event.target.id == 'increase-quantity'){

            console.log(event.target);
        
            if (existingProd.quantity < stock){ 
                 
                  quantity +=1;
                  }
            else if (existingProd.quantity == stock){
                  localproductPrice= price * stock;
                 
            }

    }

    if (event.target.id == 'decrease-quantity'){
            if (existingProd.quantity >1){
                quantity -= 1;
                
            }
    }
    localproductPrice = price * quantity;
    console.log(localproductPrice);
        
     
    let updateCartProducts = {id, quantity, price:localproductPrice};
    updateCartProducts = localCartProducts.map((prod)=>{
       return  prod.id==id ? updateCartProducts : prod;
       
    })
     localStorage.setItem('cartProductsLS', JSON.stringify(updateCartProducts));
     
     quantityElem.innerText=quantity;
     currProdPrice.innerText = `₹${localproductPrice}`;

    
}
