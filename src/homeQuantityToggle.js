

export const homeQuantityToggle=(event, id, stock)=>{
        const currCardElement = document.querySelector(`#card${id}`);
        const productQuantity = currCardElement.querySelector('.quantity');
        console.log(productQuantity);
        let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;
        console.log(event.target);
        if (event.target.className == "incre-button"){
             if (quantity < stock){
                quantity +=1;
             }
             else if(quantity == stock){
                quantity = stock;
             }
        }
        if (event.target.className == "decre-button"){
             if (quantity > 1){
                quantity -= 1;
             }
             
        }
        productQuantity.innerText = quantity;
        productQuantity.setAttribute("data-quantity", quantity.toString());
        return quantity;

};