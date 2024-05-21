import Product from "./product.model";
import { TProduct } from "./product.interface";

export const ProductServices = {
  createProduct: async (productData: TProduct) => {
    const product = new Product(productData);
    return await product.save();
  },

  getAllProductsFromDB: async () => {
    return await Product.find();
  },

  getProductByNameFromDB: async (name: string) => {
    return await Product.findProductByName(name);
  },

  deleteProductFromDB: async (name: string) => {
    return await Product.findOneAndDelete({ name });
  },
};
