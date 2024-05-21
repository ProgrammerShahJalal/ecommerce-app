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

  updateProductById: async (productId: string, updatedData: TProduct) => {
    return await Product.findByIdAndUpdate(productId, updatedData, {
      new: true,
    });
  },

  deleteProductById: async (productId: string) => {
    return await Product.findByIdAndDelete(productId);
  },
  searchProductsByName: async (searchTerm: string) => {
    return await Product.find({
      name: { $regex: new RegExp(searchTerm, "i") },
    });
  },
};
