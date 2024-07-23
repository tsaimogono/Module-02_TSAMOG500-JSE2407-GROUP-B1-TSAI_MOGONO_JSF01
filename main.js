import './style.css';
import Alpine from 'alpinejs';
import { DataProducts, getCategories } from './Api';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        products: [],
        originalProducts: [],
        filteredProducts: [],
        categories: [],
        selectedCategory: '',
        sorting: 'default',
        loading: true,
        cart: [],
        modalOpen: false,
        selectedProduct: {},
        get cartCount() {
            return this.cart.length;
        },