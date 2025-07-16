import { getCartProductFromLS } from "./getCartProducts"
const subTotal = document.querySelector('.bill-value');
const totalPrice= document.querySelector('.total-value');
const taxAmount = document.querySelector('.tax-value');
export const cartPrice = ()=>{
    let cartProducts = getCartProductFromLS();
    let initialValue=0;
    const subPrice = cartProducts.reduce((sum, item) =>{
        let ProdPrice = parseInt(item.price) || 0;
        return sum+ProdPrice}, initialValue);
    
    subTotal.textContent=`₹  ${subPrice}`;
    let tax = taxAmount.innerText.replace("₹ ", "");
    tax = Number(tax);
    let finalAmount = `${subPrice+tax}`;
    totalPrice.innerText= `₹${finalAmount}`;
  

}