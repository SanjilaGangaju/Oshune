export const getCartProductFromLS = () =>{
    let cartProducts = localStorage.getItem('cardProductLS');
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
    return cartProducts;

}