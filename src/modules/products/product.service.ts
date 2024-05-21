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

  getProductByIdFromDB: async (productId: string) => {
    return await Product.findById(productId);
  },

  deleteProductFromDB: async (name: string) => {
    return await Product.findOneAndDelete({ name });
  },
};
