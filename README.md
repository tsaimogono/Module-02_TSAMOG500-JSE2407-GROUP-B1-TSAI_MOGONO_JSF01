# Refactor the E-commerce Store in Alpine.js

## Project Overview

The aim of this project is to refactor the existing e-commerce store using Alpine.js, based on the previously developed store in React.js.

The project utilizes a CDN. To run the project, first install the necessary node modules by executing npm install. Subsequently, you can run the code using Live Server.


## Tech Stack
- HTML
- CSS (Tailwind)
- JavaScript
- Alpine.js

## Content
- Home Section
- Filter and Sort buttons
- Product List with cards of individual products
- A Modal that displays product details

## Usage
The website is an e-commerce store which users can browse for different products from different categories.

1. **Home Page**:
    - Displays the product list in cards with default sorting.
    - Contains a filter dropdown and sort options.

2. **Filter and Sort**:
    - When a filter option for a category is selected, a new API call is made to get new data for products of that specific category.
    - The user can sort the data based on price from low to high and high to low.

3. **Product Modal**:
    - The user can see more details about a product by clicking on a product card, which opens a modal.

## Area of Mastery
Working with different Alpine.js features, including:
- Handling data with `x-data`
- Conditional rendering with `x-show`
- Initializing components with `x-init`
- Event listeners such as `@click` and `@change`
- Using `$dispatch` and `$watch` for inter-component communication and state management

## Project Process
### Challenges
- Managing state and transitions for modals
### Feedback
-This project provided an excellent introduction to a JavaScript framework distinct from React.js. The diversity of the project presented various challenges, but leveraging the reference project and prior knowledge of React.js and JavaScript made it an enjoyable and enriching experience.
