export const getCartProductFromLS = () =>{
    let cartProducts = localStorage.getItem('catProductLS');
    if(!cartProducts){
        return [];
    }
    cartProducts = JSON.parse(cartProducts);
}