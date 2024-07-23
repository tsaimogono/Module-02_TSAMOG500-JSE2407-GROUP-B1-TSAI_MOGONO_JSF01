// Asynchronous function to fetch data for products
export async function DataProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // Map over the data to format each product object
    return data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
    }));
  };
  
// Asynchronous function to fetch product categories
export const getCategories = async () => {
    try {
        // Fetch the category data from the API
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error("Data fetching failed, please check your network connection");
      }
      const data = await response.json();
      return { response: data };
    } catch (error) {
      return { error: error };
    }
  };
  