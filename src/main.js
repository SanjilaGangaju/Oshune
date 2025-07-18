import  products from "../api/products.json";
import '../src/style.css';


import { showProductContainer } from "./productContainer";

const aboutUs = document.querySelector('a[href="#about-us"]');
aboutUs.addEventListener('click', (e)=>{
    e.preventDefault();
    const aboutSection = document.querySelector('.section-about');
    aboutSection.scrollIntoView({behavior: 'smooth'})
})
const productList = document.querySelector('a[href="#products"]');
productList.addEventListener('click', (e)=>{
    e.preventDefault();
    const productSection = document.querySelector('.section-products');
    productSection.scrollIntoView({behavior: 'smooth'})
})

const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('active');
    console.log('Classes on navMenu:', navMenu.className);
})
showProductContainer(products);



