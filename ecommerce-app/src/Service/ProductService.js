import axios from "axios";

class ProductService {
  static BASE_URL = "https://dummyjson.com";

  static async getCategory() {
    try {
      const response = await axios.get(
        `${ProductService.BASE_URL}/products/categories`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getAllProducts() {
    try {
      const response = await axios.get(`${ProductService.BASE_URL}/products`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async getProductByCategory(category) {
    try {
        //'https://dummyjson.com/products/category/smartphones'
      const response = await axios.get(`${ProductService.BASE_URL}/products/category/${category}`);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default ProductService;
