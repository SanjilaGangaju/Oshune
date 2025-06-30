export const homequantityToggle= (event, id, stock)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);
   const productQuantity= currentCardElement.querySelector('.productQuantity');
   
   let quantity = parseInt(productQuantity.getAttribute('data-quanitity')) || 1;
   if (event.target.className== 'cartIncrement'){
    if(quantity < stock){
        quantity += 1;
    }
    else if(quantity == stock){
        quantity = stock;

    }
   }
   if ((event.target.className == 'cardDecrement')){
    if(quantity>1){
     quantity-=1;
    }
   }
  productQuantity.innerText = quantity; 
  productQuantity.setAttribute('data-quantity', quantity.toString());
  return quantity;
}