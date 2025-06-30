import { showProductContainer } from './homeProductCards';
import './style.css';

import products from "/api/products.json";
console.log(products);

// Define a function named 'showProductcontainer' that takes an array of products as input
showProductContainer(products);