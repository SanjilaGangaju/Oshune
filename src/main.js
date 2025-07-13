import  products from "../api/products.json";
import '../src/style.css';
import { homeQuantityToggle } from "./homeQuantityToggle";

import { showProductContainer } from "./productContainer";
console.log(products);
console.log('hi');


showProductContainer(products);
homeQuantityToggle();

