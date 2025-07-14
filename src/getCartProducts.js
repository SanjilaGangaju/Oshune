export const getCartProductFromLS = () =>{
    let cartProducts = localStorage.getItem("cartProductsLS");
    if(!cartProducts){
        return [];
    }
    return JSON.parse(cartProducts);
    


}