import './style.css';
import Alpine from 'alpinejs';
import { DataProducts, getCategories } from './Api';

// Assign the Alpine object to the global window object
window.Alpine = Alpine;

// Add an event listener for when Alpine.js initializes
document.addEventListener('alpine:init', () => {
  // Define the Alpine.js data component named 'products'
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
            // Initialize the component by fetching product and category data
        },
        async init() {
            this.loading = true;
            try {
              // Fetch products and categories data in parallel
                const [products, categories] = await Promise.all([DataProducts(), getCategories()]);
                this.products = products;
                this.originalProducts = [...this.products];
                this.filteredProducts = [...this.products];
                this.categories = categories.response;
            } catch (error) {
                console.error('Error fetching products or categories:', error);
            } finally {
                this.loading = false;
            }
        },
        // Filter products based on the selected category
        filterProducts() {
            if (this.selectedCategory) {
                this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
            } else {
                this.filteredProducts = [...this.products];
            }
            this.sortProducts();
        },
        handleSort() {
            this.sortProducts();
        },
        sortProducts() {
            if (this.sorting === "low") {
                this.filteredProducts.sort((a, b) => a.price - b.price);
            } else if (this.sorting === "high") {
                this.filteredProducts.sort((a, b) => b.price - a.price);
            } else {
              // If default sorting, reset to the original product order
                this.filteredProducts = [...this.originalProducts];
                if (this.selectedCategory) {
                    this.filteredProducts = this.filteredProducts.filter(product => product.category === this.selectedCategory);
                }
            }
          },
          // Reset category and sorting filters
          resetFilters() {
              this.selectedCategory = '';
              this.sorting = 'default';
              this.filteredProducts = [...this.originalProducts];// Reset filtered products to original products
          },
          addToCart(product) {
              this.cart.push(product);
          },
          toggleNavbar() {
              this.navbarOpen = !this.navbarOpen;
          },
          openModal(productId) {
              this.selectedProduct = this.products.find(product => product.id === productId);
              this.modalOpen = true;
          },
          closeModal() {
              this.modalOpen = false;
          }
      }));
  });
  
  Alpine.start();
  